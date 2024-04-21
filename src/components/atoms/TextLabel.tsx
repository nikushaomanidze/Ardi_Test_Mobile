import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface TextLabelProps {
    text: string;
    style?: TextStyle;
}

const TextLabel = ({ text, style }: TextLabelProps) => {
    return <Text style={[styles.defaultText, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
});

export default TextLabel