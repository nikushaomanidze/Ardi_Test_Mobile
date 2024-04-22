import { useState, forwardRef } from "react";
import {
    KeyboardType,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    ViewStyle,
} from "react-native";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface PropsTypes {
    name: string;
    variant?: "name" | "email" | "password" | "phone" | "multiText" | "id";
    label?: string;
    required?: boolean;
    active?: boolean;
    containerStyle?: ViewStyle;
    control?: any;
    placeholder: string;
    onSubmitEditing?: () => void;
    placeholderTextColor?: string;
    multiline?: boolean;
    defaultValue?: string;
    labelColor?: string;
    textColor?: string;
    onFocus?: () => void;
}

const TextInputField = forwardRef<TextInput, PropsTypes>(
    (
        {
            name,
            variant,
            label,
            required = false,
            active = true,
            containerStyle,
            control,
            placeholder,
            onSubmitEditing,
            multiline,
            defaultValue = "",
            placeholderTextColor = 'gray',
            labelColor = 'gray',
            textColor = 'red',
            onFocus = () => { },
        },
        ref
    ) => {
        const [hiddenPassword, setHiddenPassword] = useState(true);
        const {
            field,
            formState: { errors },
        } = useController({ control, name, defaultValue });
        let keyboardType: KeyboardType = "default";
        // const labelText = label || t(`auth.${variant}`);

        if (variant === "email") {
            keyboardType = "email-address";
        } else if (variant === "phone" || variant === "id") {
            keyboardType = "number-pad";
        }

        return (
            <View style={[styles.container, containerStyle]}>
                {/* {(label || labelText) && (
                    <Text style={[styles.label, { color: labelColor }]}>
                        {label || labelText}
                        {required && <Text style={{ color: colors.red }}>*</Text>}
                    </Text>
                )} */}
                <View style={styles.inputWrapper(errors[name], active, variant)}>
                    <TextInput
                        ref={ref}
                        style={[
                            styles.input(variant, textColor),
                            { color: textColor, marginTop: -19 },
                        ]}
                        placeholderTextColor={placeholderTextColor}
                        value={field.value}
                        secureTextEntry={variant === "password" && hiddenPassword}
                        editable={active}
                        keyboardType={keyboardType}
                        onChangeText={field.onChange}
                        placeholder={placeholder}
                        onSubmitEditing={onSubmitEditing}
                        multiline={multiline}
                        onFocus={onFocus}
                    />
                </View>
                <ErrorMessage
                    name={name}
                    errors={errors}
                    render={({ message }) => (
                        <Text style={styles.errorText}>{message}</Text>
                    )}
                />
            </View>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 12,
    },
    // inputWrapper: (error: boolean, active: boolean, variant: string) => ({
    //     borderBottomWidth: variant === "multiText" ? undefined : 1,
    //     borderColor: error
    //         ? colors.red
    //         : active
    //             ? colors.borderLightGray
    //             : colors.borderInactive,
    //     borderStyle: "solid",
    //     position: "relative",
    // }),
    // input: (variant: string, textColor: string) => ({
    //     paddingRight: variant === "password" ? 40 : 16,
    //     height: variant === "multiText" ? 500 : 49,

    //     color: textColor,
    // }),
    eyeIcon: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 20,
        bottom: 0,
        marginTop: -15,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
    },
});

export default TextInputField;
