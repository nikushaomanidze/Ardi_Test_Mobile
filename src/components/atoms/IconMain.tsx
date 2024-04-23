import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps {
    icon: string;
    size?: number;
    color?: string;
}
const IconMain = ({icon ,size,color}: IconButtonProps) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={size} color={color} />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
});

export default IconMain;
