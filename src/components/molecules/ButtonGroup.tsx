import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { TextLabel } from '../atoms';

interface ButtonGroupProps {
    buttons: string[];
    selectedIndex: number;
    onButtonPress: (index: number) => void;
}

const ButtonGroup = ({ buttons, selectedIndex, onButtonPress }: ButtonGroupProps) => {
    return (
        <View style={styles.container}>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.button,
                        selectedIndex === index && styles.selectedButton,
                    ]}
                    onPress={() => onButtonPress(index)}
                >
                    <TextLabel text={button} style={[
                        styles.buttonText,
                        selectedIndex === index && styles.selectedButtonText,
                    ]} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,

    },
    selectedButton: {
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'green'
    },
    selectedButtonText: {
        color: 'red'
    }
});

export default ButtonGroup;
