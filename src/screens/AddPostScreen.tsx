import React from 'react';
import { useAddPostMutation, useLazyGetPostQuery } from '../services/services';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { AddPostForm } from '../components/forms';
const AddPostScreen = () => {

    const [addPost] = useAddPostMutation();
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
            })
            .catch(() => {
                toast.show("Post failed", {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
            });
    };

    return <AddPostForm handleAddPost={handleAddPost} handleBack={handleNavigationBack} />
};
export default AddPostScreen;