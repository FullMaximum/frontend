import React, { useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import FlowerCard from '../components/FlowerCard';
import flowersApi from '../api/flowers';

// import tw from "tailwind-react-native-classnames";

import { myShops } from '../../components/ShopList';

const ShopInfoScreen = ({ navigation, route }) => {
	const { data } = route.params;
	const [flowers, setFlowers] = useState(null);

	useEffect(async () => {
		let response = await flowersApi.get('/getallflowers');

		setFlowers(response.data.success ? response.data.returnObject : null);
	}, [data]);

	return (
		<ScrollView>
			<View style={styles.shopImageContainer}>
				<Image
					style={styles.shopImage}
					source={{
						uri: 'https://www.phillips-flowers.com/images/hinsdale-store.jpg',
					}}
				/>

				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.pop()}
				>
					<AntDesign name='back' size={30} color='white' />
				</TouchableOpacity>
			</View>
			<View style={styles.shopInfoContainer}>
				<Text style={styles.headerText}>{data.name}</Text>

				<View style={{ flexDirection: 'row' }}>
					<Feather
						name='star'
						size={24}
						style={{ alignSelf: 'center', marginHorizontal: 2 }}
						color='#588961'
					/>
					<Text style={styles.infoText}>{data.rating}</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Ionicons
						name='timer'
						size={24}
						color='#588961'
						style={{ marginHorizontal: 2 }}
					/>
					<Text style={styles.infoText}>{data.deliveryDistance}</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<FontAwesome5
						name='money-bill'
						size={19}
						color='#588961'
						style={{ marginHorizontal: 2 }}
					/>
					<Text style={styles.infoText}>{data.deliveryPrice}€</Text>
				</View>
				<Text style={styles.descriptionText}>{data.description}</Text>
			</View>

			{flowers
				? flowers.map((item) => (
						<FlowerCard key={item.id} data={item} />
				  ))
				: null}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	shopImageContainer: {},
	shopImage: {
		width: '100%',
		height: 250,
	},
	backButton: {
		position: 'absolute',
		top: 50,
		left: 10,
	},
	shopInfoContainer: {
		marginHorizontal: 10,
		marginVertical: 5,
	},
	headerText: {
		fontSize: 35,
		color: 'green',
		fontWeight: 'bold',
	},
	descriptionText: {
		color: '#588961',
		borderColor: '#005500',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		marginVertical: 5,
	},
	infoText: {
		alignSelf: 'center',
	},
});

export default ShopInfoScreen;
