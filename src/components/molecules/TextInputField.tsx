import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface TextInputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    variant?: 'default' | 'multiText';
}

const TextInputField = ({ value, onChangeText, placeholder, variant = 'default' }: TextInputFieldProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, variant === 'multiText' && styles.multiTextInput]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="grey"
                multiline={variant === 'multiText'}
                numberOfLines={variant === 'multiText' ? 4 : 1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    multiTextInput: {
        height: 100,
    },
});

export default TextInputField;