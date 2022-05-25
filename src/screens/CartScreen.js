import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

	useEffect(() => {
		console.log(flowers);
	}, [flowers]);

	return (
		<View>
			<CartFlowerCard />
		</View>
	);
};

const styles = StyleSheet.create();

export default CartScreen;
