import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
// import tw from "tailwind-react-native-classnames";

import { myShops } from "../../components/ShopList";
const ShopInfoScreen = () => {
	return (
		<View >
            <FlatList
                
                data={myShops}
                // renderItem={({ item }) }
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            
            
            />

			<Text>ShopInfo</Text>
		</View>
	);
};

const styles = StyleSheet.create();

export default ShopInfoScreen;
