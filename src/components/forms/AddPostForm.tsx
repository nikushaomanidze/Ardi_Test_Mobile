


// import { View, Text, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
// import React from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { useNavigation } from "@react-navigation/native";
// import { useTranslation } from "react-i18next";
// import { ScrollView } from "react-native-gesture-handler";
// import { useSelector } from "react-redux";

// import { useAppDispatch, useAppSelector } from "../../../store";
// import { AddDriverHeader, InputFiels } from "../../_molecules";
// import {
//     setCapacity,
//     setVolume,
//     setWidth,
//     setHeight,
//     setLength,
// } from "../../../store/slices/Car/addCarSlice";
// import { AddCarRoutes } from "../../../navigations/DashboardStacks/AddCarStack";
// import { colors, typography } from "../../../themes";

// const AddPostForm = () => {
//     const { t } = useTranslation();
//     const navigation = useNavigation();
    
    

//     const schema = yup
//         .object({
//             cappacity: yup.number().required(),
//             volume: yup.number().required(),
//             width: yup.number().required(),
//             height: yup.number().required(),
//             length: yup.number().required(),
//         })
//         .required();
//     type FormData = yup.InferType<typeof schema>;

//     const { control, handleSubmit } = useForm<FormData>({
//         resolver: yupResolver(schema),
//     });
//     const onSubmit = (inputData: FormData) => {
//         Alert.alert('hello')
//     };
//     return (
//         <KeyboardAvoidingView behavior="height" style={styles.container}>
//             <AddDriverHeader
//                 title={t("car.dimensions")}
//                 titleNext={t("car.done")}
//                 onPress={handleSubmit(onSubmit)}
//             />
//             <ScrollView style={{ flex: 1, backgroundColor: colors.bgWhite }}>
//                 <View style={styles.phoneInputContainer}>
//                     <InputFiels
//                         defaultValue={addCar.capacity?.toString()}
//                         variant="phone"
//                         name="cappacity"
//                         control={control}
//                         label={t("car.carryingCapacity")}
//                         placeholder=""
//                         containerStyle={styles.phoneInput}
//                     />
//                     <Text style={styles.inputText}>t</Text>
//                 </View>
//                 <View style={styles.phoneInputContainer}>
//                     <InputFiels
//                         defaultValue={addCar.volume?.toString()}
//                         variant="phone"
//                         name="volume"
//                         control={control}
//                         label={t("car.volume")}
//                         placeholder=""
//                         containerStyle={styles.phoneInput}
//                     />
//                     <Text style={styles.inputText}>m3</Text>
//                 </View>
//             </ScrollView>
//         </KeyboardAvoidingView>
//     );
// };

// export default AddPostForm;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.bgWhite,
//     },
//     acceptButton: {
//         backgroundColor: colors.blue,
//         paddingVertical: 12,
//         alignItems: "center",
//         borderRadius: 8,
//         marginTop: 16,
//     },
//     ButtonStyle: {
//         height: 60,
//         justifyContent: "space-between",
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 16,
//         borderBottomWidth: 1,
//         borderColor: colors.textLightGray,
//     },
//     buttonText: {
//         fontSize: typography.sizes.base,
//     },
//     phoneInputContainer: {
//         backgroundColor: colors.bgWhite,
//         flexDirection: "row",
//         width: "100%",
//         height: 40,
//         alignItems: "center",
//         paddingHorizontal: 30,
//         marginVertical: 25,
//     },
//     phoneInputContainer2: {
//         backgroundColor: colors.bgWhite,

//         flexDirection: "row",
//         width: "25%",
//         alignItems: "center",
//     },
//     countryPickerButton: {
//         width: 100,
//         height: 60,
//         borderBottomWidth: 1,
//         borderColor: colors.green,
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexDirection: "row",
//         paddingHorizontal: 3,
//     },
//     phoneInput: {
//         height: 50,
//         flex: 1,
//     },
//     inputText: {
//         marginLeft: -5,
//     },
//     firstInput: {
//         justifyContent: "space-between",
//         flexDirection: "row",
//         alignItems: "center",
//         marginTop: 30,
//         paddingHorizontal: 16,
//     },
// });
