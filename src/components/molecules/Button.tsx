import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TextLabel from '../atoms/TextLabel';
interface ButtonProps {
	text: string;
	onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<TextLabel text={text} style={styles.text} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#E50914',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 1,
	},
});

export default Button;
