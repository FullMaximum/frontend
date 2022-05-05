import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ShopFrontScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={styles.container}>
				<View style={styles.headerImageContainer}>
					<Image style={styles.shopImage}></Image>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => navigation.pop()}
					>
						<Ionicons
							name='arrow-back-outline'
							size={30}
							color='white'
						/>
					</TouchableOpacity>
					<Text style={styles.headerTimeToDeliveryText}>
						15-20min
					</Text>
				</View>

				<View style={styles.basicShopInfoContainer}>
					<Text style={styles.shopNameText}>Flower Shop #1</Text>
					<Text style={styles.deliveryPriceText}>Delivery 1.5€</Text>
				</View>

				<View style={styles.flowerContainer}>
					<Image style={styles.flowerImage} />
					<View
						style={{
							flexDirection: 'column',
							flex: 1,
						}}
					>
						<Text style={{ fontSize: 20, alignSelf: 'center' }}>
							Flower #1
						</Text>

						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
							}}
						>
							<TouchableOpacity
								style={{
									marginHorizontal: 10,
								}}
							>
								<Entypo
									name='chevron-thin-up'
									size={50}
									color='black'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									marginHorizontal: 10,
								}}
							>
								<Entypo
									name='chevron-thin-down'
									size={50}
									color='black'
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
			<View
				style={{
					position: 'absolute',
					bottom: 30,
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: 'green',
						width: '80%',
						height: 40,
						borderRadius: 10,
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 24,
							justifyContent: 'center',
							textAlign: 'center',
						}}
					>
						To Cart
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {},
	backButton: { position: 'absolute', top: 20, left: 10 },
	headerImageContainer: {
		backgroundColor: 'red',
		height: 200,
		width: '100%',
	},
	headerTimeToDeliveryText: {
		right: 20,
		bottom: 20,
		position: 'absolute',
		backgroundColor: 'white',
		fontWeight: 'bold',
		borderRadius: 10,
		padding: 3,
	},
	shopImage: { flex: 1, backgroundColor: 'green' },
	basicShopInfoContainer: { padding: 10 },
	shopNameText: { fontSize: 30 },
	deliveryPriceText: { fontSize: 18 },
	flowerContainer: {
		height: 90,
		flexDirection: 'row',
		borderColor: 'black',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	flowerImage: { backgroundColor: 'gray', height: '100%', width: 150 },
});

export default ShopFrontScreen;
