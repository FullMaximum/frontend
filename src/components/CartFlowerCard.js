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
					<TouchableOpacity>
						<AntDesign name='minus' size={30} color='red' />
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
		borderWidth: 1,
		flexDirection: 'row',
		marginHorizontal: 5,
		borderRadius: 12,
		backgroundColor: '#E9F4EE',
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
	},
	fullPriceText: {
		fontSize: 18,
		marginHorizontal: 5,
		width: 80,
	},
});

export default CartFlowerCard;
