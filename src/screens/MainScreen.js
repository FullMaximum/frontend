import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ShopCard from '../components/ShopCard';

const MainScreen = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Welcome!</Text>
			</View>

			<View style={styles.categoryContainer}>
				<Text style={styles.categoryHeader}>Popular</Text>
				<ScrollView
					horizontal
					style={styles.categoryScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard navigation={navigation} />
					<ShopCard />
					<ShopCard />
					<ShopCard />
				</ScrollView>
			</View>
			<View style={styles.categoryContainer}>
				<Text style={styles.categoryHeader}>New</Text>
				<ScrollView
					horizontal
					style={styles.categoryScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard />
					<ShopCard />
					<ShopCard />
					<ShopCard />
				</ScrollView>
			</View>

			<View style={styles.categoryContainer}>
				<Text style={styles.categoryHeader}>Discount</Text>
				<ScrollView
					horizontal
					style={styles.categoryScroll}
					showsHorizontalScrollIndicator={false}
				>
					<ShopCard />
					<ShopCard />
					<ShopCard />
					<ShopCard />
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	headerContainer: {},
	headerText: { fontSize: 60, color: 'green', alignSelf: 'center' },
	categoryContainer: {},
	categoryScroll: { margin: 10 },
	categoryHeader: {
		fontSize: 25,
		fontWeight: '700',
		color: '#588961',
		paddingHorizontal: 20,
	},
});

export default MainScreen;
