import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderCard = () => {
	return (
		<View style={styles.container}>
			<Text>Order Card</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		height: 20,
		width: '100',
	},
});

export default OrderCard;
