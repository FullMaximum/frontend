import React, {useState, useEffect, useContext } from 'react';
import {View, StyleSheet, Text, FlatList,
	ScrollView, SafeAreaView, TouchableOpacity,
	StatusBar, Image, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
	

import SearchBar from "./SearchBar";
import List from "./List";
import ShopInfo from "./ShopInfoScreen";

import BigShopCard from '../components/BigShopCard';
import shopsApi from '../api/shops';
import { Context as ShopContext } from '../context/ShopContext';

const ShopScreen = ({ navigation }) => {
	const { state, fetchShops } = useContext(ShopContext);

	useEffect(async () => {
		fetchShops();
	}, []);
	// callFun = () =>
	// {

	// alert("Image Clicked!!!");

	// }
	const [searchPhrase, setSearchPhrase] = useState("");
	const [clicked, setClicked] = useState(false);
	const [fakeData, setFakeData] = useState();

	useEffect(() => {
		const getData = async () => {
		  const apiResponse = await fetch(
			"https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
		  );
		  const data = await apiResponse.json();
		  setFakeData(data);
		};
		getData();
	  }, []);


	return (
		<SafeAreaView style={styles.container}>
			{!clicked && <Text style={styles.title}></Text>}
      		<SearchBar
        		searchPhrase={searchPhrase}
        		setSearchPhrase={setSearchPhrase}
        		clicked={clicked}
        		setClicked={setClicked}
      		/>
          		{/* <List
            		searchPhrase={searchPhrase}
            		data={fakeData}
            		setClicked={setClicked}
          		/> */}
			<View style={styles.themeContainer}>
				
				{state.returnObject ? (
					<FlatList
						data={state.returnObject}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return (
								<BigShopCard navigation={navigation} data={item} />
							);
						}}
						vertical
						style={styles.themeScroll}
						showsHorizontalScrollIndicator={false}
					/>
				) : null}
			</View>
			{/* <ScrollView style={styles.scrollView}>

			
				<TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.push('ShopInfo') }>
					<Image source={require('../../pics/Flowers-shop.png')} style={styles.picStyle} />
				</TouchableOpacity>
				<View style={styles.view}>
				<Text style={styles.text}>Flower-shop-1</Text>
					<Text>
         				Flower shop description
        			</Text>
				</View>
				<Text>{"\n"}</Text>
				<Image source={require('../../pics/Flowers-shop1.png')} style={styles.picStyle} />
				<View style={styles.view}>
				<Text style={styles.text}>Flower-shop-2</Text>
					<Text >
         				Flower shop description
        			</Text>
				</View>
				<Text>{"\n"}</Text>
				<Image source={require('../../pics/Flowers-shop2.png')} style={styles.picStyle} />
				<View style={styles.view}>
				<Text style={styles.text}>Flower-shop-3</Text>
					<Text >
         				Flower shop description
        			</Text>
				</View>
				<Text>{"\n"}</Text>
				<Image source={require('../../pics/Flowers-shop3.png')} style={styles.picStyle} />
				<View style={styles.view}>
				<Text style={styles.text}>Flower-shop-4</Text>
					<Text >
         				Flower shop description
        			</Text>
				</View>
			</ScrollView> */}
		</SafeAreaView>
	);
};
const callFun = () =>
{

alert("Image Clicked!!!");

}
// const styles = StyleSheet.create();

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F8F8F8',
	 	flex: 1,
	},
	scrollView: {
	  marginHorizontal: 20,
	},
	picStyle: {
		width: 350, 
		height: 150,
		marginLeft: 5,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
	view: {
		backgroundColor: 'rgba(144, 238, 144, 0.4)',
		marginRight: 16,
		marginLeft: 5,
		paddingBottom: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
	text: {
		color: 'mediumseagreen', 
		opacity: 1,
		fontSize: 22,
	},
  });

export default ShopScreen;
