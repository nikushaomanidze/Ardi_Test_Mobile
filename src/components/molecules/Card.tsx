import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IconMain } from '../atoms';
import Icon from 'react-native-vector-icons/EvilIcons'; // Import the icon component

const Card = ({ title, description, imageUrl, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', backgroundColor: 'yellow' }}>
                <Text style={{ fontSize: 10 }}>View More </Text>
                <IconMain icon='trash' size={10} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={{ marginTop: 10 }}>{title}</Text>
                <View style={styles.borderline} />
                <Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', }}>
                <TouchableOpacity>
                    <IconMain icon='trash' size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconMain icon='trash' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        flex: 1,
        maxWidth: '45%',
        height: 150
    },
    image: {
        width: "80%",
        height: 80,
        borderRadius: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: '#dc3545', // Red color for delete button
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    deleteButtonText: {
        color: '#fff',
    },
    borderline: {
        width: "100%",
        height: 0.3,
        marginVertical: 5,
        backgroundColor: 'gray'

    },
    descriptionText: {
        fontSize: 10
    }
});

export default Card;
