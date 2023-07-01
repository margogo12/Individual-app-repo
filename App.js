import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { MainTabNavigator, AuthStack } from './src/components/MainTabNavigator';
import HomePage from './src/screens/Home';
import AboutUs from './src/screens/Aboutus';
import SignUpFail from './src/screens/signupfail';
import MainPage from './src/screens/mainpage';
import SignUp from './src/screens/signup';
import SignIn from './src/screens/signin';

const Stack = createStackNavigator();

export default function App() {
  const reducer = (state, action) => {
    if (action.type === 'changeUsername') {
      return { username: action.payload };
    } else {
      return state;
    }
  };

  const store = createStore(reducer, { username: 'No user is set yet' });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="signin" component={SignIn} />
          
        <Stack.Screen name="signupfail" component={SignUpFail} />
          <Stack.Screen name="Aboutus" component={AboutUs} />
          <Stack.Screen name="mainpage" component={MainPage} />
        
        
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
