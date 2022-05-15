import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const FlowerCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: 'https://www.edenbrothers.com/store/media/Bulbs-Flowers/resized/Tulip-Darwin-Hybrid-Mix_medium.jpg',
					}}
					style={styles.image}
				/>
				<Text style={styles.priceText}>5.00€ / vnt.</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.flowerHeader}>Tulips</Text>
				<Text style={styles.flowerDescription}>
					Tulips are the best flowers ever because they are the only
					flowers I have added to the frontend thank you for listening
					to my ted talk
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { margin: 5, flexDirection: 'row' },
	imageContainer: {
		height: 130,
		width: 130,
		borderRadius: 10,
		borderColor: 'green',
		borderRightWidth: 0.5,
		borderLeftWidth: 0.5,
		borderBottomWidth: 0.5,
	},
	image: {
		width: '100%',
		flex: 100,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	priceText: {
		alignSelf: 'center',
	},
	infoContainer: {
		marginLeft: 10,
		flex: 1,
	},
	flowerHeader: {
		color: 'green',
		fontSize: 16,
		fontWeight: 'bold',
	},
	flowerDescription: {
		color: '#588961',
	},
});

export default FlowerCard;
