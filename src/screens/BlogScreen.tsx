import React, { useEffect, useState } from 'react';

import { useLazyGetPostQuery, useDeletePostMutation } from '../services/services';
import { useAppSelector } from '../store';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../navigations/StackNavigator';

import { BlogLayout } from '../components';
import { useToast } from 'react-native-toast-notifications';

import { BlogPostsResponseData } from '../types';
import { categories } from '../themes';

const BlogScreen = () => {
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
	const [refreshing, setRefreshing] = useState(false);

	const toast = useToast();
	const navigation = useNavigation<StackNavigationProp<'Blog'>>();

	const [getPost] = useLazyGetPostQuery();
	const [deletePost] = useDeletePostMutation();
	const { isLoading, isError, postsData } = useAppSelector(state => state.posts);

	useEffect(() => {
		getPost();
	}, [getPost]);

	const filteredPostsData = postsData?.filter(
		(post: BlogPostsResponseData) => post.category === categories[selectedCategoryIndex],
	);

	const handleCategoryChange = (index: number) => {
		setSelectedCategoryIndex(index);
	};

	const handleNavigationToDetail = (item: BlogPostsResponseData) => {
		navigation.navigate('BlogDetail', {
			name: item?.name,
			category: item?.category,
			content: item?.content,
		});
	};
	const handleNavigationToAdd = () => {
		navigation.navigate('AddPost');
	};
	const handleNavigationToEdit = (item: BlogPostsResponseData) => {
		navigation.navigate('EditPost', {
			name: item?.name,
			id: item?.id,
			content: item?.content,
		});
	};

	const handleDeletePost = (id: number) => {
		deletePost(id)
			.unwrap()
			.then(() => {
				getPost();
				toast.show('Post Delete Successfully', {
					type: 'success',
					placement: 'top',
					duration: 4000,
					animationType: 'slide-in',
				});
			})
			.catch(() => {
				toast.show('Post Delete Filed', {
					type: 'danger',
					placement: 'top',
					duration: 4000,
					animationType: 'slide-in',
				});
			});
	};

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			getPost();
		}, 1000);
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
			refreshing={refreshing}
			onRefresh={onRefresh}
		/>
	);
};

export default BlogScreen;
