import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ShopCard = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri: 'https://www.phillips-flowers.com/images/hinsdale-store.jpg',
				}}
			/>
			<Text>HELLO</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		height: 120,
		width: 180,
		marginHorizontal: 5,
		borderRadius: 10,
	},
	image: {
		width: 180,
		height: 80,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
});

export default ShopCard;
