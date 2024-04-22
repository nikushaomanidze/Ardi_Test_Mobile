import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

const CustomToast = () => {
    const toast = useToast();

    const showSuccessToast = () => {
        toast.show('Success!', { type: 'success' });
    };

    const showErrorToast = () => {
        toast.show('Error!', { type: 'error' });
    };

    return (
        <React.Fragment>
            <TouchableOpacity style={[styles.button, styles.successButton]} onPress={showSuccessToast}>
                <Text style={styles.buttonText}>Show Success Toast</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.errorButton]} onPress={showErrorToast}>
                <Text style={styles.buttonText}>Show Error Toast</Text>
            </TouchableOpacity>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    successButton: {
        backgroundColor: 'green',
    },
    errorButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CustomToast;
