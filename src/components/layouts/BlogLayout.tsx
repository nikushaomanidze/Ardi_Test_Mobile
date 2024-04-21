import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import ButtonGroup from '../molecules/ButtonGroup';
import Card from '../molecules/Card';
import SkeletonContent from 'react-native-skeleton-content';

const BlogLayout = ({ categories, selectedCategoryIndex, handleCategoryChange, isLoading, isError, postsData }) => {
    const renderEmptyComponent = () => {
        return (
            <View>
                <Text>Data is Empty</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ButtonGroup buttons={categories} selectedIndex={selectedCategoryIndex} onButtonPress={handleCategoryChange} />

            {isLoading ? (
                <ActivityIndicator style={styles.loader} />
            ) : isError ? (
                <Text style={styles.errorText}>Error fetching data</Text>
            ) : (
                <FlatList
                    data={postsData}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={renderEmptyComponent}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            description={item.content}
                            imageUrl={item.imageUrl}
                            onEdit={() => console.log('edit')}
                            onDelete={() => console.log('delete')}
                        />
                    )}
                    numColumns={2}
                />
            )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    buttonGroup: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
    },
    selectedCategoryButton: {
        backgroundColor: 'blue',
    },
    categoryButtonText: {
        color: 'black',
    },
    loader: {
        marginTop: 20,
    },
    errorText: {
        marginTop: 20,
        color: 'red',
    },
    itemContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
});

export default memo(BlogLayout);