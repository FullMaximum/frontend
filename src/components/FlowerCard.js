import React, { useState, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useDidUpdateEffect from '../hooks/useDidUpdateEffect';

const FlowerCard = ({ data, onChange, initialAmount = 0 }) => {
	const [amount, setAmount] = useState(initialAmount);

	useDidUpdateEffect(() => onChange(data.id, amount), [amount]);

const FlowerCard = ({ data }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: data.imagePath,
					}}
					style={styles.image}
				/>
				<Text style={styles.priceText}>{data.price}€ / vnt.</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.flowerHeader}>{data.name}</Text>
				<Text style={styles.flowerDescription} numberOfLines={3}>
					{data.category}
				</Text>
				<View style={styles.counterContainer}>
					<TouchableOpacity
						style={styles.counterButton}
						onPress={() => {
							if (amount <= 0) return;

							setAmount(amount - 1);
						}}
					>
						<AntDesign name='leftcircle' size={30} color='red' />
					</TouchableOpacity>
					<TextInput
						style={{
							alignSelf: 'center',
							fontSize: 20,
							width: 40,
							textAlign: 'center',
						}}
						keyboardType='numeric'
						maxLength={3}
					>
						{amount}
					</TextInput>
					<TouchableOpacity
						style={styles.counterButton}
						onPress={() => {
							setAmount(amount + 1);
						}}
					>
						<AntDesign name='rightcircle' size={30} color='green' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { margin: 5, flexDirection: 'row' },
	imageContainer: {
		height: 130,
		width: 130,
		borderRadius: 10,
		borderColor: 'green',
		borderRightWidth: 0.5,
		borderLeftWidth: 0.5,
		borderBottomWidth: 0.5,
	},
	image: {
		width: '100%',
		flex: 100,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	priceText: {
		alignSelf: 'center',
	},
	infoContainer: {
		marginLeft: 10,
		flex: 1,
	},
	flowerHeader: {
		color: 'green',
		fontSize: 16,
		fontWeight: 'bold',
	},
	flowerDescription: {
		color: '#588961',
		height: 60,
	},
	counterContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 2,
	},
	counterButton: {
		marginHorizontal: 10,
	},
});

export default FlowerCard;
