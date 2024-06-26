import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MainHeader, TextLabel } from '..';
import { SafeAreaView } from 'react-native-safe-area-context';

interface BlogDetailType {
	title: string;
	category: string;
	description: string;
	handeBack: () => void;
}
const BlogDetailLayout = ({ title, category, description, handeBack }: BlogDetailType) => {
	return (
		<SafeAreaView style={styles.container}>
			<MainHeader MainText="Add Post" LeftText="close" leftonPress={handeBack} />
			<ScrollView>
				<View style={styles.content}>
					<TextLabel text={title} style={styles.headerText} />
					<Image style={styles.tinyLogo} source={require('../../assets/images/cover.jpg')} />
					<View style={styles.borderline} />
					<View style={styles.categoryComponent}>
						<TextLabel style={styles.headline} text="category : " />
						<Text style={styles.descriptionText}>{category}</Text>
					</View>
					<View style={styles.descriptionComponent}>
						<TextLabel style={styles.headline} text="description : " />
						<Text style={styles.descriptionText}>{description}</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: '#000',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 30,
	},
	headerText: {
		marginVertical: 16,
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	borderline: {
		width: '90%',
		height: 1,
		marginVertical: 5,
		backgroundColor: '#E50914',
	},
	tinyLogo: {
		width: '90%',
		height: 150,
		resizeMode: 'cover',
		borderRadius: 30,
		marginVertical: 16,
	},
	descriptionComponent: { width: '90%' },
	categoryComponent: {
		flexDirection: 'row',
		width: '90%',
		alignItems: 'center',
		marginVertical: 10,
	},
	headline: {
		fontSize: 14,
		color: 'white',
		fontWeight: '700',
	},
	descriptionText: {
		fontSize: 14,
		color: '#fff',
	},
});

export default BlogDetailLayout;
