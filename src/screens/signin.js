import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
// import { UseSelector } from 'react-redux';
import CustomText from '../components/CustomText'
import {useFonts} from 'expo-font'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SignIn({ navigation }) {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
      setUsername(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };

    const [fontsLoaded] = useFonts({
      'YsabeauSC': require('../../assets/fonts/YsabeauSC-VariableFont_wght.ttf')
    })
  


    // const onBuffer=() =>{
    //     console.log("on buffering==>>>", data)
    // } 
    // const videoError = (data) => {
    //     console.log("error raised===>>>",data)
    // }
    

    const handleSignIn = async() =>{
      try{
        const storedUsername = await AsyncStorage.getItem('username')
        const storedPassword = await AsyncStorage.getItem('password')

        if (username === storedUsername && password === storedPassword){
          console.log('User logged in', username)
          navigation.navigate('mainpage')
        }else{
          console.log('Invalid credentials')
          Alert.alert('Invalid credentials. Please try again.')
        } 
      }catch (error){
        console.log('Error retieving data:', error)
      }
  };

  if (!fontsLoaded){
    return null
  }


  return (
 
    <View style={styles.container}>
    
      <TextInput 
        style={styles.input}
        placeholder='Enter your username'
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput 
        style={styles.input}
        placeholder='Enter your password'
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry
      />
    
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSignIn}>
        <Text style={styles.textStyle}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,

  },
  input:{
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    borderColor:'red',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#BD1616',
  },
  image:{
    width:200,
    height:200,
    borderRadius:100,
  },
  imageContainer:{
    marginBottom: 70
  },
  backgroundVideo:{
    height:'100%'
  },
  viedocontainer:{
    flex: 1,
  }
});
