import React, { useEffect, useState } from 'react';
import { BlogDetailLayout } from '../components';
import { Route } from '@react-navigation/native';
const BlogScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <BlogDetailLayout
            title={item.name}
            description={item.content}
            category={item.category}
        />
    );
};

export default BlogScreen;