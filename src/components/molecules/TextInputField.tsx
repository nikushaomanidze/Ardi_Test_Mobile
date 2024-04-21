import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface TextInputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

const TextInputField = ({ value, onChangeText, placeholder }: TextInputFieldProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="grey"
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
});

export default TextInputField;
