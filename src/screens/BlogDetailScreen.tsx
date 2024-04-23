import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BlogDetailLayout } from '../components';
import { StackScreensProps } from '../navigations/StackNavigator';

const BlogDetailScreen = ({ route }: StackScreensProps<'BlogDetail'>) => {
	const navigation = useNavigation();
	const handleBackNavigation = () => {
		navigation.goBack();
	};

	return (
		<BlogDetailLayout
			title={route?.params?.name || ''}
			description={route?.params?.content || ''}
			category={route?.params?.category || ''}
			handeBack={handleBackNavigation}
		/>
	);
};

export default BlogDetailScreen;
