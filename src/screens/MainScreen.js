import React, { useContext, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	ScrollView,
	FlatList,
} from 'react-native';
import ShopCard from '../components/ShopCard';
import shopsApi from '../api/shops';
import { Context as ShopContext } from '../context/ShopContext';

const MainScreen = ({ navigation }) => {
	const { state, fetchShops } = useContext(ShopContext);

	useEffect(async () => {
		fetchShops();
	}, []);

	return (
		<SafeAreaView>
			<View style={styles.themeContainer}>
				<Text style={styles.themeHeader}>Popular 🤩</Text>
				{state.returnObject ? (
					<FlatList
						data={filteredRating(state.returnObject)}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return (
								<ShopCard navigation={navigation} data={item} />
							);
						}}
						horizontal
						style={styles.themeScroll}
						showsHorizontalScrollIndicator={false}
					/>
				) : null}
			</View>

			<View>
				<Text style={styles.themeHeader}>New 🤫</Text>
				{state.returnObject ? (
					<FlatList
						data={sortedDate(state.returnObject)}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return (
								<ShopCard navigation={navigation} data={item} />
							);
						}}
						horizontal
						style={styles.themeScroll}
						showsHorizontalScrollIndicator={false}
					/>
				) : null}
			</View>

			<View>
				<Text style={styles.themeHeader}>Trending Now 🚀</Text>
				{state.returnObject ? (
					<FlatList
						data={state.returnObject}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return (
								<ShopCard navigation={navigation} data={item} />
							);
						}}
						horizontal
						style={styles.themeScroll}
						showsHorizontalScrollIndicator={false}
					/>
				) : null}
			</View>
			<View>
				<Text style={styles.themeHeader}>All shops</Text>
				{state.returnObject ? (
					<FlatList
						data={state.returnObject}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return (
								<ShopCard navigation={navigation} data={item} />
							);
						}}
						horizontal
						style={styles.themeScroll}
						showsHorizontalScrollIndicator={false}
					/>
				) : null}
			</View>
		</SafeAreaView>
	);
};

const filteredRating = (data) => {
	let newData = [...data]
	return (data.sort((a,b) => b.rating - a.rating).filter(x => x.rating > 4));
}

const sortedDate = (data) => {
	let newData = [...data]
	return (data.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt)));
}

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
