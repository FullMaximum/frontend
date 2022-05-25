import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CartFlowerCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={styles.headerText}>Tulips</Text>
					<Text style={styles.fullPriceText}>300.23€</Text>
				</View>
				<View style={styles.amountContainer}>
					<TouchableOpacity style={styles.editAmountButton}>
						<AntDesign name='minus' size={35} color='red' />
					</TouchableOpacity>
					<Text style={styles.flowerAmountText}>500</Text>
					<TouchableOpacity style={styles.editAmountButton}>
						<AntDesign name='plus' size={35} color='green' />
					</TouchableOpacity>
				</View>
			</View>
			<Image
				style={styles.image}
				source={{
					uri: 'https://www.gardendesign.com/pictures/images/263x300Exact_62x0/site_3/helianthus-yellow-flower-pixabay_11863.jpg',
				}}
			/>
			<TouchableOpacity style={styles.deleteButton}>
				<EvilIcons
					style={{ marginLeft: -3 }}
					name='trash'
					size={36}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 5,
		borderRadius: 12,
		backgroundColor: '#E9F4EE',
		marginVertical: 10,
	},
	image: {
		height: 80,
		width: 100,
		backgroundColor: 'red',
	},
	infoContainer: {
		flex: 1,
	},
	headerText: {
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
		marginHorizontal: 5,
		flex: 1,
	},
	amountText: {
		flex: 1,
		textAlign: 'center',
		borderWidth: 1,
	},
	deleteButton: {
		backgroundColor: 'red',
		width: 30,
		justifyContent: 'center',
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		marginRight: -1,
	},
	amountContainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fullPriceText: {
		fontSize: 18,
		marginHorizontal: 5,
		width: 80,
	},
	flowerAmountText: { fontSize: 20 },
	editAmountButton: {
		borderColor: 'black',
		borderWidth: 0.1,
		borderRadius: 20,
		marginHorizontal: 5,
	},
});

export default CartFlowerCard;
