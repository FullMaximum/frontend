import React, { useState, useContext, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import FlowerCard from '../components/FlowerCard';
import flowersApi from '../api/flowers';
import CartFlowerCard from '../components/CartFlowerCard';
import { Context as FlowerContext } from '../context/ShopContext';

const CartScreen = () => {
	const [flowers, setFlowers] = useState(null);

	useEffect(async () => {
		let response = await flowersApi.get('/getallflowers');

		setFlowers(response.data.success ? response.data.returnObject : null);
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView style={styles.cartFlowersContainer}>
				<CartFlowerCard />
				<CartFlowerCard />
				<CartFlowerCard />
			</ScrollView>
			<View style={styles.cartOverviewContainer}>
				<Text style={styles.totalText}>total: 95€</Text>
				<TouchableOpacity style={styles.orderNowButton}>
					<Text style={styles.orderNowText}>Order Now!</Text>
				</TouchableOpacity>
			</View>
			<View></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	cartFlowersContainer: {
		height: 330,
	},
	cartOverviewContainer: {},
	totalText: {
		textAlign: 'right',
		marginHorizontal: 20,
		fontSize: 19,
	},
	orderNowButton: {
		backgroundColor: '#6C9673',
		width: '60%',
		height: 40,
		borderRadius: 20,
		alignSelf: 'center',
		marginVertical: 10,
	},
	orderNowText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
	},
});

export default CartScreen;
