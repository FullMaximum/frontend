import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderCard = ({ data }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.orderHeaderText}>Order #{data.id}</Text>
			<Text style={styles.orderPriceText}>{data.orderTotal}€</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		height: 80,
		backgroundColor: '#E9F4EE',
		borderRadius: 20,
		marginVertical: 12,
		paddingHorizontal: 10,
	},
	orderHeaderText: {
		color: '#6C9673',
		fontSize: 24,
	},
	orderPriceText: {
		fontSize: 18,
		color: 'black',
		marginTop: 10,
	},
});

export default OrderCard;
