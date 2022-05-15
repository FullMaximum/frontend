import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ShopCard = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.push('ShopInfo')}
		>
			<Image
				style={styles.image}
				source={{
					uri: 'https://www.phillips-flowers.com/images/hinsdale-store.jpg',
				}}
			/>
			<Text style={styles.headerText}>Flower Shop #1</Text>
			<View style={styles.additionalInfoContainer}>
				<Text style={styles.deliveryPriceText}>5€</Text>
				<Feather
					name='star'
					size={20}
					style={{ alignSelf: 'center', marginHorizontal: 2 }}
					color='black'
				/>
				<Text style={styles.shopRatingText}>4.9</Text>
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
		borderColor: 'green',
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 1,
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
		alignSelf: 'center',
	},
	additionalInfoContainer: {
		flexDirection: 'row',
		marginHorizontal: 10,
	},
	deliveryPriceText: {
		fontSize: 16,
		flex: 1,
	},
	shopRatingText: {
		fontSize: 16,
	},
});

export default ShopCard;
