import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import { TextLabel } from '../atoms';

interface ButtonGroupProps {
	buttons: string[];
	selectedIndex: number;
	onButtonPress: (index: number) => void;
}

const ButtonGroup = ({ buttons, selectedIndex, onButtonPress }: ButtonGroupProps) => {
	return (
		<View style={styles.container}>
			{buttons.map((button, index) => (
				<TouchableOpacity
					key={index}
					style={[styles.button, selectedIndex === index && styles.selectedButton]}
					onPress={() => onButtonPress(index)}
				>
					<TextLabel
						text={button}
						style={
							[styles.buttonText, selectedIndex === index && styles.selectedButtonText] as TextStyle
						}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '30%',
		height: 30,
		borderWidth: 1,
		borderColor: '#E50914',
		borderRadius: 5,
	},
	selectedButton: {
		backgroundColor: '#E50914',
	},
	buttonText: {
		color: '#fff',
	},
	selectedButtonText: {
		color: '#fff',
	},
});

export default ButtonGroup;
