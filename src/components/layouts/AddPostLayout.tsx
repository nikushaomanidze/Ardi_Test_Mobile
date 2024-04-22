
import { StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import ButtonGroup from '../molecules/ButtonGroup';
import Card from '../molecules/Card';
import SkeletonContent from 'react-native-skeleton-content';
import { ScrollView } from 'react-native-gesture-handler';
import { TextLabel } from '..';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
// import { TextInputField, Button } from '../components';
import { TextInputField } from '..';
import { Button } from '..';
import { Dropdown } from 'react-native-element-dropdown';

const AddPostLayout = ({ handleAddPost }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Drama', value: 'drama' },
        { label: 'Comedy', value: 'comedy' },
        { label: 'Thriller', value: 'thriller' },
    ];
    console.log('value', value)
    return (
        <View style={styles.container}>
            <TextInputField
                value={name}
                onChangeText={setName}
                placeholder="Film Name"
                variant="default"
            />
            <TextInputField
                value={description}
                onChangeText={setDescription}
                placeholder="description"
                variant="multiText"
            />
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select category' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <Button text='add Post' onPress={() => handleAddPost(name, description, value)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
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
    },//dropdown
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
});
export default AddPostLayout