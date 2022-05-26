import React, { useState, useContext, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import CartFlowerCard from '../components/CartFlowerCard';
import OrderCard from '../components/OrderCard';
import { Context as CartContext } from '../context/CartContext';
import orders from '../api/orders';

const CartScreen = () => {
	const { state, changeFlower, clearState } = useContext(CartContext);
	const [totalPrice, setTotalPrice] = useState(0);
	const [userOrders, setUserOrders] = useState();

	const changeFlowers = (id, amount) => {
		changeFlower({ flower: { id, amount } });
	};

	useEffect(() => {
		if (state && state.flowers) {
			const sum = state.flowers.reduce(
				(partialSum, a) =>
					partialSum + (a.amount ? a.amount * a.price : 0),
				0
			);
			setTotalPrice(sum);
		}
	}, [state]);

	useEffect(async () => {
		let response = await orders.get('/byUserId/1');

		setUserOrders(response.data.success ? response.data : null);
	}, []);

	const addOrder = async () => {
		if (!state && !state.flowers) return;

		const items = state.flowers.reduce(
			(previousValue, currentValue) => [
				...previousValue,
				{ flowerId: currentValue.id, count: currentValue.amount },
			],
			[]
		);

		const orderData = {
			userId: 1,
			shopId: state.shopId,
			status: 0,
			orderTotal: totalPrice,
			deliveryAddress: '',
			rowVersion: null,
			items,
		};

		const response = await orders.post('/add', orderData);

		clearState();
	};

	return (
		<ScrollView style={styles.container}>
			{totalPrice === 0 ? null : (
				<View>
					<FlatList
						style={styles.cartFlowersContainer}
						data={state.flowers}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return !item.amount && item.amount !== 0 ? null : (
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
						<TouchableOpacity
							style={styles.orderNowButton}
							onPress={() => addOrder()}
						>
							<Text style={styles.orderNowText}>Order Now!</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			{userOrders
				? userOrders.returnObject.map((item) => (
						<OrderCard key={item.id} data={item} />
				  ))
				: null}
		</ScrollView>
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
