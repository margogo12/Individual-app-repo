import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/logo3.png')}
          style={styles.image}
       />
      </View>
      
      <Text style={styles.header}>Welcome to Your Inner Self</Text>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('signin')}>
        <Text style={styles.textStyle}>SIGN IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.textStyle}>SIGN UP</Text>
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
    marginBottom: 130,
    color:'#000000'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#BD1616',
    marginBottom: 40,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'white',
  },
  image:{
    width:200,
    height:200,
    borderRadius:100,
  },
  imageContainer:{
    marginBottom: 100,
    marginTop:0,
  }
});