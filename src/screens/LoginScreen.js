import React, { useEffect, useState, useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { state, login } = useContext(AuthContext);

	useEffect(() => {
		if (state.token) navigation.navigate('MainFlow');
	}, [state]);

	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={styles.logoImage}
			/>
			<Text style={styles.headerText}>Keturi Vėjai</Text>
			<TextInput
				style={styles.textInput}
				placeholder='Username'
				value={username}
				onChangeText={(text) => setUsername(text)}
				autoCapitalize='none'
			/>
			<TextInput
				style={styles.textInput}
				placeholder='Password'
				secureTextEntry={true}
				value={password}
				onChangeText={(text) => setPassword(text)}
				autoCapitalize='none'
			/>
			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => login({ username, password })}
			>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		margin: 5,
		flex: 1,
	},
	logoImage: {
		height: 300,
		width: 300,
		alignSelf: 'center',
		marginBottom: -40,
	},
	headerText: {
		color: '#588961',
		fontSize: 36,
		alignSelf: 'center',
		fontWeight: 'bold',
		marginBottom: 50,
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 20,
		width: '60%',
		height: 40,
		paddingHorizontal: 15,
		alignSelf: 'center',
		marginBottom: 20,
		borderColor: '#588961',
	},
	loginButton: {
		backgroundColor: '#588961',
		height: 40,
		width: '60%',
		alignSelf: 'center',
		borderRadius: 30,
		justifyContent: 'center',
	},
	loginText: {
		alignSelf: 'center',
		fontSize: 20,
		color: 'white',
	},
});

export default LoginScreen;
