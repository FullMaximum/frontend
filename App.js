import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import ShopScreen from './src/screens/ShopScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ShopFrontScreen from './src/screens/ShopFrontScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeFlow() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='MainFlow'
				component={MainFlow}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name='ShopFront' component={ShopFrontScreen} />
		</Stack.Navigator>
	);
}

function MainFlow() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Home'
				component={MainScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen name='Shop' component={ShopScreen} />
			<Tab.Screen name='Cart' component={CartScreen} />
			<Tab.Screen name='About Me' component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<HomeFlow />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
