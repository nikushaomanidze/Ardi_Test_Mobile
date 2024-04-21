import React, { useEffect, useState } from 'react';
import { useLazyGetPostQuery } from '../services/services';
import { useAppSelector } from '../store';
import { BlogLayout } from '../components';


const BlogScreen = () => {
    const [getPost] = useLazyGetPostQuery();
    const { isLoading, isError, postsData } = useAppSelector((state) => state.posts);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    useEffect(() => {
        getPost();
    }, []);

    const categories = ['drama', 'comedy', 'thriller'];

    const filteredPostsData = postsData?.filter((post) => post.category === categories[selectedCategoryIndex]);

    const handleCategoryChange = (index) => {
        setSelectedCategoryIndex(index);
    };

    return (
        <BlogLayout
            categories={categories}
            selectedCategoryIndex={selectedCategoryIndex}
            handleCategoryChange={handleCategoryChange}
            isLoading={isLoading}
            isError={isError}
            postsData={filteredPostsData}
        />
    );
};

export default BlogScreen;