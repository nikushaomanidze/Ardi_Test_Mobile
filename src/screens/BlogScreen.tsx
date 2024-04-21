import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from '../themes';
import { BlogPostsResponse } from '../types';
import { useLazyGetPostQuery } from '../services/services';
import { useAppSelector } from '../store';
// import ApiService from '../services/Api';

const BlogScreen = () => {

    const [getPost] = useLazyGetPostQuery()
    useEffect(() => {
        getPost()
    }, [])
    const navigation = useNavigation()
    const { isLoading, isError, postsData } = useAppSelector((state) => state.posts);
    console.log('post is ', isLoading, isError, postsData)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenRoutes.addPost as never)}>
                <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BlogScreen;



