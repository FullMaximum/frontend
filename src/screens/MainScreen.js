import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import ShopCard from '../components/ShopCard';

const MainScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.themeContainer}>
				<Text style={styles.themeHeader}>Popular</Text>
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
		borderColor: 'red',
		borderWidth: 1,
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
