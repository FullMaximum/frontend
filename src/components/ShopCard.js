import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ShopCard = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate('FlowerFront')}
		>
			<Image style={styles.image} />
			<View style={styles.infoContainer}>
				<Text style={styles.headerText}>Flower Shop #1</Text>
				<View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
					<Text style={styles.priceText}>2.50€</Text>
					<View style={styles.ratingContainer}>
						<FontAwesome
							name='star'
							size={14}
							color='black'
							style={{ alignSelf: 'center', padding: 2 }}
						/>
						<Text>4.9</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 120,
		width: 160,
		backgroundColor: '#AAFF00',
		borderRadius: 10,
		marginHorizontal: 10,
	},
	image: {
		height: 70,
		backgroundColor: 'yellow',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	infoContainer: {
		padding: 5,
	},
	headerText: {
		alignSelf: 'center',
		color: 'green',
		fontWeight: 'bold',
		fontSize: 16,
	},
	priceText: { fontWeight: 'bold' },
	ratingContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-end',
	},
});

export default ShopCard;
