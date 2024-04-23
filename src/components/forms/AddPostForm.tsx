import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputField } from '..';
import { Dropdown } from 'react-native-element-dropdown';
import { MainHeader } from '..';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toast, useToast } from 'react-native-toast-notifications';

interface AddPostFormProps {
	handleAddPost: (name: string, content: string, value: string) => void;
	handleBack: () => void;
}
const AddPostForm = ({ handleAddPost, handleBack }: AddPostFormProps) => {
	const toast = useToast();

	const [value, setValue] = useState('');
	const [isFocus, setIsFocus] = useState(false);

	const data = [
		{ label: 'Drama', value: 'Drama' },
		{ label: 'Comedy', value: 'Comedy' },
		{ label: 'Thriller', value: 'Thriller' },
	];
	const schema = yup
		.object({
			name: yup.string().required(),
			content: yup.string().required(),
		})
		.required();
	type FormData = yup.InferType<typeof schema>;
	const { control, handleSubmit } = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	const onSubmit = (formData: FormData) => {
		const { name, content } = formData;
		if (value) {
			handleAddPost(name, content, value);
		} else {
			toast.show('Please Select Category ', {
				type: 'danger',
				placement: 'top',
				duration: 4000,
				animationType: 'slide-in',
			});
			Toast;
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<MainHeader
				MainText="Add Post"
				LeftText="close"
				leftonPress={handleBack}
				RightText="add post"
				rightOnPress={handleSubmit(onSubmit)}
			/>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
			>
				<ScrollView style={{ flex: 1 }}>
					<View style={styles.inputContainer}>
						<TextInputField
							placeholder="Please Add Post Name "
							variant="name"
							name="name"
							control={control}
							containerStyle={styles.phoneInput}
						/>
						<TextInputField
							variant="multiText"
							name="content"
							control={control}
							placeholder="Please Add Post Content"
							containerStyle={styles.phoneInput}
						/>
						<Dropdown
							style={styles.dropdown}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							data={data}
							maxHeight={300}
							labelField="label"
							valueField="value"
							placeholder={'Select category'}
							value={value}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(false)}
							onChange={item => {
								setValue(item.value);
								setIsFocus(false);
							}}
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default AddPostForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161515',
		paddingHorizontal: 16,
	},
	acceptButton: {
		paddingVertical: 12,
		alignItems: 'center',
		borderRadius: 8,
		marginTop: 16,
	},
	mainContant: {
		flex: 1,
		justifyContent: 'space-between',
	},
	phoneInputContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 40,
		alignItems: 'center',
		paddingHorizontal: 30,
		marginVertical: 25,
	},
	phoneInputContainer2: {
		flexDirection: 'row',
		width: '25%',
		alignItems: 'center',
	},
	countryPickerButton: {
		width: 100,
		height: 60,
		borderBottomWidth: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 3,
	},
	phoneInput: {
		marginVertical: 50,
		flex: 1,
	},
	inputText: {
		marginLeft: -5,
	},
	firstInput: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
		paddingHorizontal: 16,
	},
	inputContainer: {
		marginTop: 16,
		flex: 1,
		justifyContent: 'center',
	},
	dropdown: {
		height: 50,
		borderColor: 'black',
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		marginTop: 10,
		backgroundColor: '#f2f5f2',
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
	buttonContainer: {
		// marginTop: 150,
		// marginBottom: 30,
		width: '100%',
		alignSelf: 'center',
	},
	button: {
		alignSelf: 'center',
	},
});
