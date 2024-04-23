import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, } from 'react-native';
import ButtonGroup from '../molecules/ButtonGroup';
import Card from '../molecules/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader } from '..';
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
}
const BlogLayout = ({ categories, selectedCategoryIndex, handleCategoryChange, isLoading, isError, postsData, handleDelete, onDetail, handleAddPost, handleEdit }:BlogLayoutProps) => {
    const renderEmptyComponent = () => {
        return (
            <View>
                <Text>Data is Empty</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader MainText='Blog Screen' RightText='Add Post' rightOnPress={handleAddPost} />

            <ButtonGroup buttons={categories} selectedIndex={selectedCategoryIndex} onButtonPress={handleCategoryChange} />

            {isLoading ? (
                <ActivityIndicator style={styles.loader} />
            ) : isError ? (
                <Text style={styles.errorText}>Error fetching data</Text>
            ) : (
                <FlatList
                    data={postsData}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={renderEmptyComponent}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            description={item.content}
                            onEdit={() => handleEdit(item)}
                            onDelete={() => handleDelete(item.id)}
                            onDetail={() => onDetail(item)}
                        />
                    )}
                    numColumns={2}
                />
            )
            }
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#161515',
        color: "white"
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
        color: "white"
    }
});

export default memo(BlogLayout);