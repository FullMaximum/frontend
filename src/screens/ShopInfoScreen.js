import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// import tw from "tailwind-react-native-classnames";

import { myShops } from '../../components/ShopList';

const ShopInfoScreen = ({ navigation }) => {
	return (
		<View>
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
				<Text style={styles.descriptionText}>
					description description description description description
					description description description description description
					description description description description description
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Feather
						name='star'
						size={20}
						style={{ alignSelf: 'center', marginHorizontal: 2 }}
						color='#588961'
					/>
					<Text>review</Text>
				</View>
			</View>
		</View>
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
	},
	headerText: {
		fontSize: 35,
		color: '#588961',
		fontWeight: 'bold',
	},
	descriptionText: {
		color: '#588961',
	},
});

export default ShopInfoScreen;
