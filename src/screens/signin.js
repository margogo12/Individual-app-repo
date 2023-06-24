import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, {useState} from 'react';



export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const onBuffer=() =>{
    //     console.log("on buffering==>>>", data)
    // } 
    // const videoError = (data) => {
    //     console.log("error raised===>>>",data)
    // }
    
    const handleEmailChange = (text) => {
        setEmail(text)
    };
    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleSignIn = () =>{
        // Perform sign-in logic with email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigation logic for signing in
    navigation.navigate('mainpage');
  };


  return (
 
    <View style={styles.container}>
    
      <TextInput 
        style={styles.input}
        placeholder='Enter your email'
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInput 
        style={styles.input}
        placeholder='Enter your password'
        onChangeText={handlePasswordChange}
        value={password}
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