import React, { useEffect, useState } from 'react';
import { useLazyGetPostQuery } from '../services/services';
import { useAppSelector } from '../store';
import { BlogLayout } from '../components';
import { useDeletePostMutation } from '../services/services';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from '../themes';
const BlogScreen = () => {
    const navigation = useNavigation()
    const [getPost] = useLazyGetPostQuery();
    const [deletePost] = useDeletePostMutation();
    const { isLoading, isError, postsData } = useAppSelector((state) => state.posts);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    useEffect(() => {
        getPost();
    }, []);

    const categories = ['drama', 'comedy', 'thriller'];

    const filteredPostsData = postsData?.filter((post) => post.category === categories[selectedCategoryIndex]);

    const handleCategoryChange = (index: number) => {
        setSelectedCategoryIndex(index);
    };
    const handleNavigationToDetail = (item) => {
        navigation.navigate(ScreenRoutes.blogDetail, { item })
    }
    const handleNavigationToAdd = () => {
        navigation.navigate(ScreenRoutes.addPost)
    }
    const handleNavigationToEdit = (item) => {
        navigation.navigate(ScreenRoutes.editPost, { item })
    }



    const handleDeletePost = (id: number) => {
        deletePost(id)
            .unwrap()
            .then(() => {
                Alert.alert('Film Removed successfully')
                getPost();
            })
            .catch((error: any) => {
                Alert.alert("Some Problem");
                console.log(error);
            });
    };

    return (
        <BlogLayout
            categories={categories}
            selectedCategoryIndex={selectedCategoryIndex}
            handleCategoryChange={handleCategoryChange}
            isLoading={isLoading}
            isError={isError}
            postsData={filteredPostsData}
            handleDelete={handleDeletePost}
            onDetail={handleNavigationToDetail}
            handleAddPost={handleNavigationToAdd}
            handleEdit={handleNavigationToEdit}
        />
    );
};

export default BlogScreen;