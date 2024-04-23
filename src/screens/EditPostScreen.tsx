import React from 'react';
import { Alert } from 'react-native';
import { AddPostLayout } from '../components';
import { useModifyPostMutation, useLazyGetPostQuery } from '../services/services';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { EditPostForm } from '../components/forms';
const EditPostScreen = ({ route }) => {
    const { item } = route.params;
    const [modifyPost,] = useModifyPostMutation();
    const toast = useToast();
    const [getPost] = useLazyGetPostQuery();
    const navigation = useNavigation()
    const handleEditPost = ({ name, content }) => {
        const editPayload = {
            name: name,
            content: content,
        };
        modifyPost({ id: item.id, body: editPayload })
            .unwrap()
            .then(() => {
                getPost();
                navigation.goBack();
                console.log("modifyPost", modifyPost)
                toast.show("Post Edited csacsc", {
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
    const handleGoBack = () => {
        navigation.goBack()
    }
    return <EditPostForm
        title={item.name}
        description={item.content}
        goBack={handleGoBack}
        handleEdit={handleEditPost}

    />
};
export default EditPostScreen