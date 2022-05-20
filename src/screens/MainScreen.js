import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import ShopCard from '../components/ShopCard';
import shopsApi from '../api/shops';

const MainScreen = ({ navigation }) => {
	const getResponse = async () => {
		let response = await shopsApi.get('/getAll');

		console.log(response.data);
	};

	getResponse();

	return (
		<SafeAreaView>
			<View style={styles.themeContainer}>
				<Text style={styles.themeHeader}>Popular 🤩</Text>
				<ScrollView
					horizontal
					style={styles.themeScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
				</ScrollView>
			</View>

			<View>
				<Text style={styles.themeHeader}>New 🤫</Text>
				<ScrollView
					horizontal
					style={styles.themeScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
				</ScrollView>
			</View>

			<View>
				<Text style={styles.themeHeader}>Trending Now 🚀</Text>
				<ScrollView
					horizontal
					style={styles.themeScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
					<ShopCard navigation={navigation} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	themeContainer: {
		marginTop: 50,
	},
	themeHeader: {
		fontSize: 30,
		color: 'green',
		fontWeight: 'bold',
		marginLeft: 5,
	},
	themeScroll: {
		marginHorizontal: 5,
		marginVertical: 10,
	},
});

export default MainScreen;
