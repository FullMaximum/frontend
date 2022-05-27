import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BigShopCard = ({ navigation, data }) => {
    // console.log(data);
	return (
		<TouchableOpacity
			onPress={() => navigation.push('ShopInfo', { data })}
		>
            <View style={styles.view}>
			<Image
				style={styles.picStyle}
				source={{
					uri: 'https://www.phillips-flowers.com/images/hinsdale-store.jpg',
				}}
			/>
            {/* <View style={styles.view}> */}
                <View style={styles.additionalInfoContainer}>
				<Text style={styles.text}>{data.name} 
                {/* <Text style={styles.deliveryPriceText}>
					{data.deliveryPrice}€
				    </Text>   */}
                    </Text>
                    <Text style={styles.descriptionText2}>
					{data.deliveryPrice}€
				    </Text>
                </View>
                <View style={styles.additionalInfoContainer}>
					<Text style={styles.descriptionText}>
         			    {data.description}
        			</Text>
                    <Feather
                        name='star'
                        size={20}
                        style={{ alignSelf: 'center', marginHorizontal: 2 }}
                        color='black'
                    />
                    <Text style={styles.shopRatingText}>{data.rating}</Text>
                    </View>

			</View>
			<Text>{"\n"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
    container2: {
        flex: 1,
      },
      scrollView: {
        marginHorizontal: 20,
      },
      picStyle: {
          width: 350, 
          height: 150,
        //   marginLeft: 30,
        //   borderRadius: 10,
        borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
        //   borderWidth: 1,
          borderColor: '#fff',
      },
      view: {
            backgroundColor: '#E9F4EE',
            marginRight: 30,
            marginLeft: 30,
            paddingBottom: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
      },
      text: {
          flex: 1,
          color: '#6C9673', 
          opacity: 1,
          marginLeft: 10,
          fontSize: 26,
      },
      descriptionText: {
        // alignSelf: 'center', 
        // marginHorizontal: 2,
        marginLeft: 10,
		fontSize: 16,
		flex: 1,
        color: '#000000'
	},
    descriptionText2: {
        alignSelf: 'center', 
        marginHorizontal: 2,
        // marginLeft: 20,
		fontSize: 16,
        color: '#000000'
		// flex: 1,
	},
	container: {
		height: 130,
		width: 180,
		marginHorizontal: 5,
		borderRadius: 10,
	},
	image: {
		width: 178,
		height: 80,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	headerText: {
		marginHorizontal: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
	additionalInfoContainer: {
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: -5,
	},
	deliveryPriceText: {
        color: 'black',
		fontSize: 16,
		flex: 1,
	},
	shopRatingText: {
        color: 'black',
		fontSize: 16,
	},
});

export default BigShopCard;
