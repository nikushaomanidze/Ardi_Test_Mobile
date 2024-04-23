import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextLabel } from '../atoms';

interface CardProps {
    title: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
    onDetail: () => void;
}
const Card = ({ title, description, onEdit, onDelete, onDetail }:CardProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.moreButton} onPress={onDetail}>
                <TextLabel style={styles.moreText} text='View More' />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <Text numberOfLines={1} style={{ marginTop: 10 }}>{title}</Text>
                <View style={styles.borderline} />
                <Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', }}>
                <TouchableOpacity onPress={onEdit} style={styles.bottomButton1}>
                    <TextLabel style={styles.bottomButton1Text} text='Edit' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={styles.bottomButton2}>
                    <TextLabel style={styles.bottomButton2Text} text='Delete' />
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
        height: 170,
        backgroundColor: '#f2f5f2'
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
        backgroundColor: '#dc3545',
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
    },
    moreButton: { alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 5, padding: 6 },
    moreText: { fontSize: 10, color: "#da0b0b", fontWeight: "bold" },
    contentContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start'
    },
    bottomButton1: {
        backgroundColor: 'gray',
        width: '40%',
        height: 30,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButton2: {
        backgroundColor: 'red',
        width: '40%',
        height: 30,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButton1Text: {
        fontSize: 10,
        color: 'black'
    },
    bottomButton2Text: {
        fontSize: 10,
        color: 'white'
    }
});

export default Card;
