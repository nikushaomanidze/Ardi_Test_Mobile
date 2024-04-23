import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlogScreen, AddPostScreen, EditPostScreen, BlogDetailScreen } from '../screens';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Blog'}
			>
				<Stack.Screen name={'Blog'} component={BlogScreen} />
				<Stack.Screen name={'BlogDetail'} component={BlogDetailScreen} />
				<Stack.Screen name={'AddPost'} component={AddPostScreen} />
				<Stack.Screen name={'EditPost'} component={EditPostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default StackNavigator;

export type StackScreensProps<t extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	t
>;
export type StackNavigationProp<t extends keyof RootStackParamList> =
	StackScreensProps<t>['navigation'];
export type StackRouteProp<t extends keyof RootStackParamList> = StackScreensProps<t>['route'];
