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

const ProfileScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			
			<View style={styles.picView}>
				<Image source={require('../../assets/ph_finn-the-human.png')} style={styles.picStyle} >
				</Image>
			</View>
			<Text style={styles.textName}>HI NAME!</Text>
			<View style={styles.view}>
				<Text style={styles.text}>Settings</Text>
			</View>
			<View style={styles.view}>
				<Text style={styles.text}>Write us</Text>
			</View>
			<View style={styles.view}>
				<Text style={styles.text}>Previous orders</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: '#E9F4EE',
		// width: 300,
		height: 70,
		marginRight: 30,
		marginLeft: 30,
		marginBottom: 10,
		paddingBottom: 5,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: '#fff',
		justifyContent: 'center'
		
  	},
  	text: {
		// flex: 1,
		color: '#6C9673', 
		opacity: 1,
		marginLeft: 20,
		fontSize: 26,
		
		textAlign: 'left'
	},
	textName: {
		// flex: 1,
		color: '#6C9673', 
		opacity: 1,
		// marginLeft: 20,
		fontSize: 36,
		marginBottom: 20,
		textAlign: 'center'
	},
	picStyle: {
		width: 120, 
		height: 120,
		marginLeft: 5,
		// borderRadius: 100,
		padding: 10,
		// borderWidth: 1,
		borderColor: '#fff',
		// alignItems: 'center',
		alignSelf: 'center',
		// backgroundColor: 'red',
		// bor
	},
	picView: {
		marginTop: 70,
		marginBottom: 30,
		width: 150,
		height: 150,
		padding: 10,
		backgroundColor: '#E9F4EE',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}

});

export default ProfileScreen;
