import React, { useEffect, useState } from 'react';
import { BlogDetailLayout } from '../components';
import { useNavigation } from '@react-navigation/native';
const BlogScreen = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation()
    const handleBackNavigation = () => {
        navigation.goBack()
    }
    return (
        <BlogDetailLayout
            title={item.name}
            description={item.content}
            category={item.category}
            handeBack={handleBackNavigation}
        />
    );
};

export default BlogScreen;