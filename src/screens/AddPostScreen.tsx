import React from 'react';
import { Alert } from 'react-native';
import { AddPostLayout } from '../components';
import { useAddPostMutation, useLazyGetPostQuery } from '../services/services';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { AddPostForm } from '../components/forms';
const AddPostScreen = () => {
    const [addPost, isLoading] = useAddPostMutation();
    const toast = useToast();
    const [getPost] = useLazyGetPostQuery();
    const navigation = useNavigation()
    const handleAddPost = () => {
        const postPayload = {
            name: 'tarantino',
            content: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            category: 'drama'
        };
        addPost(postPayload)
            .unwrap()
            .then(() => {
                getPost()
                navigation.goBack()
                toast.show("Post Added successfully", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
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


    return <AddPostLayout handleAddPost={handleAddPost} />
};
export default AddPostScreen;