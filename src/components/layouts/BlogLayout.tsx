import React, { memo } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import ButtonGroup from '../molecules/ButtonGroup';
import Card from '../molecules/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader, TextLabel } from '..';
import { BlogPostsResponseData } from '../../types';
interface BlogLayoutProps {
	categories: string[];
	selectedCategoryIndex: number;
	handleCategoryChange: (index: number) => void;
	isLoading: boolean;
	isError: boolean;
	postsData: BlogPostsResponseData[] | undefined;
	handleDelete: (id: number) => void;
	onDetail: (item: BlogPostsResponseData) => void;
	handleAddPost: () => void;
	handleEdit: (item: BlogPostsResponseData) => void;
	refreshing: boolean;
	onRefresh: () => void;
}
const BlogLayout = ({
	categories,
	selectedCategoryIndex,
	handleCategoryChange,
	isLoading,
	isError,
	postsData,
	handleDelete,
	onDetail,
	handleAddPost,
	handleEdit,
	refreshing,
	onRefresh,
}: BlogLayoutProps) => {
	const MemoizedCard = React.memo(Card);

	const renderEmptyComponent = () => {
		return (
			<View style={styles.emptyContainer}>
				<TextLabel style={styles.errorText} text="Data is Empty" />
			</View>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<MainHeader MainText="Blog Screen" RightText="Add Post" rightOnPress={handleAddPost} />

			<ButtonGroup
				buttons={categories}
				selectedIndex={selectedCategoryIndex}
				onButtonPress={handleCategoryChange}
			/>

			{isLoading ? (
				<ActivityIndicator style={styles.loader} color={'red'} size={'large'} />
			) : isError ? (
				<View style={styles.emptyContainer}>
					<TextLabel style={styles.errorText} text=">Error fetching data" />
				</View>
			) : (
				<FlatList
					data={postsData}
					keyExtractor={item => item.id?.toString() ?? ''}
					ListEmptyComponent={renderEmptyComponent}
					numColumns={2}
					initialNumToRender={10}
					windowSize={10}
					removeClippedSubviews={true}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'red'} />
					}
					renderItem={({ item }) => (
						<MemoizedCard
							title={item.name || ''}
							description={item.content || ''}
							onEdit={() => handleEdit(item)}
							onDelete={() => handleDelete(item.id ?? 0)}
							onDetail={() => onDetail(item)}
						/>
					)}
				/>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: '#161515',
		color: 'white',
	},
	buttonGroup: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	categoryButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
		marginRight: 10,
	},
	selectedCategoryButton: {
		backgroundColor: 'blue',
	},
	categoryButtonText: {
		color: 'black',
	},
	loader: {
		marginTop: 20,
	},
	errorText: {
		marginTop: 20,
		color: 'red',
		alignSelf: 'center',
	},
	itemContainer: {
		marginBottom: 20,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
		borderRadius: 5,
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
	},
	imageStyle: {
		resizeMode: 'cover',
	},
	textColor: {
		color: 'white',
	},
	emptyContainer: {
		width: '100%',
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default memo(BlogLayout);
