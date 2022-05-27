import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import ShopScreen from './src/screens/ShopScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ShopInfoScreen from './src/screens/ShopInfoScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider as ShopProvider } from './src/context/ShopContext';
import { Provider as CartProvider } from './src/context/CartContext';
import { Provider as AuthProvider } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeFlow() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='MainFlow'
				component={MainFlow}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='ShopInfo'
				component={ShopInfoScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

function MainFlow() {
	return (
		<Tab.Navigator
			screenOptions={{tabBarShowLabel: false}}
		>
			<Tab.Screen
				name='Home'
				component={MainScreen}
				options={{ 
					headerShown: false,
					tabBarIcon: ({  }) => (
						<Image source={require('./assets/bottomTabAssets/Home.png')} style={styles.logo} />
					)
				}}
			/>
			<Tab.Screen 
				name='Shop' 
				component={ShopScreen} 
				options={{ headerShown: false,
					tabBarIcon: ({  }) => (
						<Image source={require('./assets/bottomTabAssets/Logo.png')}  />
					) 
				}}

			/>
			<Tab.Screen 
				name='Cart' 
				component={CartScreen}
				options={{ headerShown: false,
					tabBarIcon: ({  }) => (
						<Image source={require('./assets/bottomTabAssets/ShoppingCart.png')} style={styles.logo}  />
					) 
				}}
				 />
			<Tab.Screen 
				name='About Me' 
				component={ProfileScreen}
				options={{ headerShown: false,
					tabBarIcon: ({  }) => (
						<Image source={require('./assets/bottomTabAssets/Profile.png')} style={styles.logo} />
					) 
				}}
				/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<ShopProvider>
					<NavigationContainer>
						<HomeFlow />
					</NavigationContainer>
				</ShopProvider>
			</CartProvider>
		</AuthProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 38,
		height: 38
	}
});
