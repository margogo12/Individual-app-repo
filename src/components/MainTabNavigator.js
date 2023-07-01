// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import MainPage from '../screens/mainpage';
// import AboutUs from '../screens/Aboutus';
// import SignIn from '../screens/signin';
// import SignUp from '../screens/signup';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'mainpage') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Aboutus') {
//             iconName = focused ? 'information-circle' : 'information-circle-outline';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#42DEE1',
//         inactiveTintColor: '#FFCD29',
//         style: {
//           backgroundColor: '#FFFFFF',
//           padding: 10,
//           height: 70,
//         },
//         labelStyle: {
//           paddingBottom: 10,
//           fontSize: 10,
//         },
//       }}
//     >
//       <Tab.Screen name="mainpage" component={MainPage} />
//       <Tab.Screen name="Aboutus" component={AboutUs} />
//     </Tab.Navigator>
//   );
// };

// const AuthStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="signin" component={SignIn} />
//       <Stack.Screen name="signup" component={SignUp} />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
//         <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
