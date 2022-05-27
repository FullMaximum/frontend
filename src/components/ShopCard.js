import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ShopCard = ({ navigation, data }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.push('ShopInfo', { data })}
		>
			<Image
				style={styles.image}
				source={{
					uri: 'https://www.phillips-flowers.com/images/hinsdale-store.jpg',
				}}
			/>
			<Text style={styles.headerText}>{data.name}</Text>
			<View style={styles.additionalInfoContainer}>
				<Text style={styles.deliveryPriceText}>
					{data.deliveryPrice}€
				</Text>
				<Feather
					name='star'
					size={20}
					style={{ alignSelf: 'center', marginHorizontal: 2 }}
					color='#588961'
				/>
				<Text style={styles.shopRatingText}>{data.rating}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 130,
		width: 180,
		marginHorizontal: 5,
		borderRadius: 10,
		backgroundColor: '#E9F4EE',
	},
	image: {
		width: 178,
		height: 80,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	headerText: {
		marginHorizontal: 10,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#588961',
	},
	additionalInfoContainer: {
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: -5,
	},
	deliveryPriceText: {
		fontSize: 16,
		flex: 1,
		color: '#588961',
	},
	shopRatingText: {
		fontSize: 16,
		color: '#588961',
	},
});

export default ShopCard;
