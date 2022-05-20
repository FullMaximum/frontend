import React from 'react';
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

// import tw from "tailwind-react-native-classnames";

import { myShops } from '../../components/ShopList';

const ShopInfoScreen = ({ navigation }) => {
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
				<Text style={styles.headerText}>Flower Shop #1</Text>

				<View style={{ flexDirection: 'row' }}>
					<Feather
						name='star'
						size={24}
						style={{ alignSelf: 'center', marginHorizontal: 2 }}
						color='#588961'
					/>
					<Text style={styles.infoText}>4.9</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Ionicons
						name='timer'
						size={24}
						color='#588961'
						style={{ marginHorizontal: 2 }}
					/>
					<Text style={styles.infoText}>5-15min</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<FontAwesome5
						name='money-bill'
						size={19}
						color='#588961'
						style={{ marginHorizontal: 2 }}
					/>
					<Text style={styles.infoText}>5.00€</Text>
				</View>
				<Text style={styles.descriptionText}>
					description description description description description
					description description description description description
					description description description description description
				</Text>
			</View>

			<FlowerCard />
			<FlowerCard />
			<FlowerCard />
			<FlowerCard />
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
