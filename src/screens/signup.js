import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'




export default function SignUp({ navigation }) {

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [reenterPassword, setreenterPassword] = useState('')

    useEffect(() => {
      // Retrieve the stored email and password from AsyncStorage
      retrieveData();
    }, []);

    const retrieveData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('password');
        const reenterPassword= await AsyncStorage.getItem('resetPassword')
  
        if (storedUsername !== null) {
          setUsername(storedUsername);
        }
        if (storedPassword !== null) {
          setPassword(storedPassword);
        }
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    
    const handleUsernameChange = (text) => {
      setUsername(text)
    };
    const handlePasswordChange = (text) => {
      setPassword(text)
    };
    const handleReenterPasswordChange = (text) => {
      setreenterPassword(text)
    };

    const handleSignIn = async () =>{

      if (password !== reenterPassword){
        Alert.alert ('The entered passwords do not match')
        return
      }
      try{
        await AsyncStorage.setItem('username',username)
        await AsyncStorage.setItem('password',password)
        console.log('User Data stored successfully')
        navigation.navigate('signin')
      } catch (error){
        console.log('Error storing user data', error)
      }   

  };


  return (

 
    <View style={styles.container}>

        <TextInput 
          style={styles.input}
          placeholder='Enter your username'
          onChangeText={handleUsernameChange}
          value={username}
        />
  
        {/* <Text style={styles.label}>Password</Text> */}
        <TextInput 
          style={styles.input}
          placeholder='Enter your password'
          onChangeText={handlePasswordChange}
          value={password}
        />
        <TextInput 
          style={styles.input}
          placeholder='Re-enter your password'
          onChangeText={handleReenterPasswordChange}
          value={reenterPassword}
        />
      
    
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSignIn}>
        <Text style={styles.textStyle}>Sign Up</Text>
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
    color:'#000000'
  },
  input:{
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20,
  },
  label:{
    width:100,
    marginRight:10,
    fontSize:16,
    textAlign: 'left',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
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