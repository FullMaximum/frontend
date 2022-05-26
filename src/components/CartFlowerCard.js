import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CartFlowerCard = ({ data, onChange }) => {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={styles.headerText}>{data.name}</Text>
					<Text style={styles.fullPriceText}>
						{data.price * data.amount}€
					</Text>
				</View>
				<View style={styles.amountContainer}>
					<TouchableOpacity
						style={styles.editAmountButton}
						onPress={() =>
							data.amount === 0
								? null
								: onChange(data.id, data.amount - 1)
						}
					>
						<AntDesign name='minus' size={35} color='red' />
					</TouchableOpacity>
					<Text style={styles.flowerAmountText}>{data.amount}</Text>
					<TouchableOpacity
						style={styles.editAmountButton}
						onPress={() => onChange(data.id, data.amount + 1)}
					>
						<AntDesign name='plus' size={35} color='green' />
					</TouchableOpacity>
				</View>
			</View>
			<Image
				style={styles.image}
				source={{
					uri: data.imagePath,
				}}
			/>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() => onChange(data.id, 0)}
			>
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
		backgroundColor: 'white',
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
		marginHorizontal: 10,
	},
	flowerAmountText: { fontSize: 20, marginHorizontal: 10 },
	editAmountButton: {
		borderColor: 'black',
		borderWidth: 0.1,
		borderRadius: 20,
		marginHorizontal: 5,
	},
});

export default CartFlowerCard;
