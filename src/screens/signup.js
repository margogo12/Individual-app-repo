import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
// import Video from 'react-native-video'; 



export default function SignUp({ navigation }) {
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
    const onBuffer=(data) =>{
      console.log("on buffering==>>", data)
    }
    const videoError =(data) => {
      console.log('error raised==>>', data)
    }

    const handleSignIn = () =>{
        // Perform sign-in logic with email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigation logic for signing in
    navigation.navigate('Home');
  };


  return (

 
    <View style={styles.container}>
      {/* <View style={styles.viedocontainer}>
        <Video 
  
          ref={(ref) => {
            this.player = ref
          }}
          source = {require('../../assets/video.mp4')}
          onBuffer={onBuffer}
          onError={videoError}
          style={styles.backgroundVideo}
        />
      </View> */}
    
        {/* <Text style={styles.label}>Email</Text> */}
        <TextInput 
          style={styles.input}
          placeholder='Enter your email'
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInput 
          style={styles.input}
          placeholder='Date of Birth(DD/MM/YY)'
          onChangeText={handlePasswordChange}
          value={password}
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
          onChangeText={handlePasswordChange}
          value={password}
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