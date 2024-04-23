import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

interface IconButtonProps {
    icon: string;
    size?: number;
    color?: string;
}

// const IconMain = ({ icon, size, color }: IconButtonProps) => {
const IconMain = ({ }: IconButtonProps) => {
    return (
        <View style={styles.container}>
            {/* <Icon name={icon} size={size} color={color} /> */}
            <Icon name="stepforward" size={30} color="#900" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
});

export default IconMain;
