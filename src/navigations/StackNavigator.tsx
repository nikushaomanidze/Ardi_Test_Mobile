import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlogScreen, AddPostScreen } from '../screens';
import { ScreenRoutes } from '../themes';
import { BlogDetailScreen } from '../screens';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ScreenRoutes.blog}
            >
                <Stack.Screen name={ScreenRoutes.blog} component={BlogScreen} />
                <Stack.Screen name={ScreenRoutes.addPost} component={AddPostScreen} />
                <Stack.Screen name={ScreenRoutes.blogDetail} component={BlogDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;