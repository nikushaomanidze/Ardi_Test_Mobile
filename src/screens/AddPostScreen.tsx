import React from 'react';
import { Alert } from 'react-native';
import { AddPostLayout } from '../components';
import { useAddPostMutation, useLazyGetPostQuery } from '../services/services';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { AddPostForm } from '../components/forms';
import { CustomToast } from '../components';
const AddPostScreen = () => {

    const [addPost, isLoading] = useAddPostMutation();
    const toast = useToast();
    const [getPost] = useLazyGetPostQuery();
    const navigation = useNavigation()
    const handleNavigationBack = () => {
        navigation.goBack()
    }
    const handleAddPost = (name: string, content: string, value: string) => {
        const postPayload = {
            name: name,
            content: content,
            category: value
        };
        addPost(postPayload)
            .unwrap()
            .then(() => {
                getPost();
                navigation.goBack();
                toast.show("Post Added successfully", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
                return (
                    <CustomToast message="Success message" type="success" />
                )
            })
            .catch((error: any) => {
                toast.show("Post failed", {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
                console.error(error);
            });
    };

    return <AddPostForm handleAddPost={handleAddPost} handleBack={handleNavigationBack} />
};
export default AddPostScreen;