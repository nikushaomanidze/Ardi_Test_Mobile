import React, { useEffect, useState } from 'react';
import { useLazyGetPostQuery } from '../services/services';
import { useAppSelector } from '../store';
import { BlogLayout } from '../components';
import { useDeletePostMutation } from '../services/services';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  BlogPostsResponseData } from '../types';
import {  StackNavigationProp } from '../navigations/StackNavigator';
import { useToast } from 'react-native-toast-notifications';

const BlogScreen = () => {
    const toast =useToast()
    const navigation = useNavigation<StackNavigationProp<"Blog">>();
    const [getPost] = useLazyGetPostQuery();
    const [deletePost] = useDeletePostMutation();
    const { isLoading, isError, postsData } = useAppSelector((state) => state.posts);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    useEffect(() => {
        getPost();
    }, []);

    const categories = ['drama', 'comedy', 'thriller'];

    const filteredPostsData = postsData?.filter((post: BlogPostsResponseData) => post.category === categories[selectedCategoryIndex]);

    const handleCategoryChange = (index: number) => {
        setSelectedCategoryIndex(index);
    };

    const handleNavigationToDetail = (item:BlogPostsResponseData) => {
        navigation.navigate("BlogDetail", {
            name:item?.name,
            category:item?.category,
            content:item?.content
        });
    }
    const handleNavigationToAdd = () => {
        navigation.navigate('AddPost')
    }
    const handleNavigationToEdit = (item:BlogPostsResponseData) => {
        navigation.navigate('EditPost', { 
            name:item?.name,
            id:item?.id,
            content:item?.content
         })
    }

    const handleDeletePost = (id: number) => {
        deletePost(id)
            .unwrap()
            .then(() => {
                getPost();
                toast.show("Post Delete Successfully", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
            })
            .catch(() => {
                toast.show("Post Delete Filed", {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
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
