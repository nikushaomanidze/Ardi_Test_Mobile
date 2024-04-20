import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from '../themes';

const BlogScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Blog Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenRoutes.addPost as never)}>
                <Text>next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BlogScreen;

