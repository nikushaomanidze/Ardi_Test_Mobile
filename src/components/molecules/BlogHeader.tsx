import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface PropsTypes {
    FirstValue: string;
    SecondValue: string;
    onPress?: () => void;
}
const BlogHeader = ({ FirstValue, SecondValue, onPress }: PropsTypes) => {

    return (
        <View style={styles.container}>
            <View style={[styles.button, { justifyContent: 'flex-start' }]} />
            <View style={styles.button}>
                <Text style={styles.Firstbutton}>{FirstValue}</Text>
            </View>
            <TouchableOpacity style={[styles.button, { justifyContent: 'flex-end' }]} onPress={onPress} >
                <Text style={styles.buttonText}>{SecondValue}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { height: 40, flexDirection: 'row', justifyContent: 'space-between' },
    button: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 12,
        color: 'white'
    },
    Firstbutton: {
        color: 'red',
        fontSize: 19,
        fontWeight: '600'
    }
});

export default BlogHeader;
