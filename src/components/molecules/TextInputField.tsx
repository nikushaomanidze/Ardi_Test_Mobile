import React, { forwardRef } from 'react'; // Import React
import { KeyboardType, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface PropsTypes {
	name: string;
	variant?: 'name' | 'multiText';
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
}

const TextInputField = forwardRef<TextInput, PropsTypes>(
	(
		{ name, variant, active = true, control, placeholder, onSubmitEditing, defaultValue = '' },
		ref,
	) => {
		const {
			field,
			formState: { errors },
		} = useController({ control, name, defaultValue });
		const keyboardType: KeyboardType = 'default';

		return (
			<View style={styles.container}>
				<TextInput
					ref={ref}
					style={[
						styles.input,
						variant === 'multiText' && styles.multiTextInput,
						errors[name] && styles.errorInput,
					]}
					value={field.value}
					onChangeText={field.onChange}
					editable={active}
					placeholder={placeholder}
					keyboardType={keyboardType}
					onSubmitEditing={onSubmitEditing}
					placeholderTextColor="grey"
					multiline={variant === 'multiText'}
					numberOfLines={variant === 'multiText' ? 4 : 1}
					textAlignVertical="top"
				/>
				<ErrorMessage
					name={name}
					errors={errors}
					render={({ message }) => <Text style={styles.errorText}>{message}</Text>}
				/>
			</View>
		);
	},
);

TextInputField.displayName = 'TextInputField';

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	input: {
		height: 50,
		borderWidth: 1,
		borderColor: '#161515',
		backgroundColor: '#f2f5f2',
		borderRadius: 8,
		fontSize: 15,
		padding: 10,
		marginVertical: 10,
	},
	multiTextInput: {
		height: 150,
		borderWidth: 1,
		borderColor: '#161515',
		backgroundColor: '#f2f5f2',
		borderRadius: 8,
		fontSize: 15,
		padding: 10,
		paddingTop: 10,
		marginTop: 10,
		marginVertical: 10,
	},
	errorText: {
		fontSize: 12,
		color: 'red',
		marginLeft: 10,
	},
	errorInput: {
		borderColor: '#E50914',
		borderWidth: 2,
	},
});

export default TextInputField;
