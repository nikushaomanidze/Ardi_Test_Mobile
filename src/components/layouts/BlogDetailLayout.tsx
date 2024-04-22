import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import ButtonGroup from '../molecules/ButtonGroup';
import Card from '../molecules/Card';
import SkeletonContent from 'react-native-skeleton-content';
import { ScrollView } from 'react-native-gesture-handler';
import { TextLabel } from '..';

const BlogDetailLayout = ({ title, category, description }) => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <TextLabel text={title} style={styles.headerText} />
                <View style={styles.borderline} />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://i.pinimg.com/564x/08/f5/dc/08f5dc4ba6cd8793aec766b425af931f.jpg',
                    }}
                />

                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        // backgroundColor: 'red'
    },
    content: {
        flex: 1,
        // backgroundColor: 'green',
        alignItems: 'center',
        marginBottom: 30
    },
    headerText: {
        marginVertical: 16
    },
    borderline: {
        width: "90%",
        height: 1,
        marginVertical: 5,
        backgroundColor: 'gray'

    },
    tinyLogo: {
        width: '90%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 30,
        marginVertical: 16
    },
    descriptionText: {
        fontSize: 14
    }
});

export default BlogDetailLayout