import React from 'react';
import { useModifyPostMutation, useLazyGetPostQuery } from '../services/services';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { EditPostForm } from '../components/forms';
import { StackScreensProps } from '../navigations/StackNavigator';

const EditPostScreen = ({ route }:StackScreensProps <"EditPost">) => {
    const [modifyPost,] = useModifyPostMutation();
    const toast = useToast();
    const [getPost] = useLazyGetPostQuery();
    const navigation = useNavigation()
    const handleEditPost = ( name:string, content:string ) => {
        const editPayload = {
            name: name,
            content: content,
        };

        modifyPost({ id: Number(route?.params?.id), body: editPayload })
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
    return  <EditPostForm
        title={route?.params?.name}
        description={route?.params?.content}
        goBack={handleGoBack}
        handleEdit={handleEditPost}

    />
};
export default EditPostScreen