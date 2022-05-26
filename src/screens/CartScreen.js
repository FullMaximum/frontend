import React, { useState, useContext, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import CartFlowerCard from '../components/CartFlowerCard';
import OrderCard from '../components/OrderCard';
import { Context as CartContext } from '../context/CartContext';

const CartScreen = () => {
	const { state, changeFlower } = useContext(CartContext);
	const [totalPrice, setTotalPrice] = useState(0);

	const changeFlowers = (id, amount) => {
		changeFlower({ flower: { id, amount } });
	};

	useEffect(() => {
		if (state && state.flowers) {
			const sum = state.flowers.reduce(
				(partialSum, a) => partialSum + a.amount * a.price,
				0
			);
			setTotalPrice(sum);
		}
	}, [state]);

	return (
		<View style={styles.container}>
			{totalPrice === 0 ? null : (
				<View>
					<FlatList
						style={styles.cartFlowersContainer}
						data={state.flowers}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return item.amount === 0 ? null : (
								<CartFlowerCard
									data={item}
									onChange={changeFlowers}
								/>
							);
						}}
						showsVerticalScrollIndicator={false}
					/>
					<View style={styles.cartOverviewContainer}>
						<Text style={styles.totalText}>
							total: {totalPrice}€
						</Text>
						<TouchableOpacity style={styles.orderNowButton}>
							<Text style={styles.orderNowText}>Order Now!</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	cartFlowersContainer: {
		maxHeight: 330,
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
