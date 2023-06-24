import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/Home';
import AboutUs from './src/screens/Aboutus';
import SignUpFail from './src/screens/signupfail';
import SignUpSuc from './src/screens/mainpage';
import SignUp from './src/screens/signup';
import SignIn from './src/screens/signin';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name= 'signupfail' component={SignUpFail}/>
        <Stack.Screen name= 'mainpage' component={SignUpSuc} /> 
        <Stack.Screen name='signup' component={SignUp}/>
        <Stack.Screen name='signin' component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}