import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useToast } from "react-native-toast-notifications";

const CustomToast = ({ message, type }) => {
    const toast = useToast();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: type === 'success' ? '#4caf50' :
                type === 'warning' ? '#ff9800' :
                    type === 'error' ? '#f44336' : '#607d8b'
        },
        message: {
            color: '#fff',
            fontSize: 16,
        },
    });


    return (
        toast.show(message, {
            type: type,
            placement: 'top',
            duration: 4000,
            animationType: 'slide-in',
        })
    )
};

export default CustomToast;
