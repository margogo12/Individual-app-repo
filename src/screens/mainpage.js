import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Box = ({ imageSource, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const MainPage = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  useEffect(()=> {
    retrieveUsername();
  }, []);

  const retrieveUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username')
      if (storedUsername !== null){
        setUsername(storedUsername)
      }
    }catch (error){
      console.log('Error retrieving username: ', error)
    }
  }

  const handleBoxPress = (boxId) => {
    console.log(`Box ${boxId} pressed`);
    // Perform desired action when a box is pressed
  };

  const handleLogOut = async () => {
    try{
      await AsyncStorage.removeItem('username')
      navigation.navigate('Home')
    }catch (error){
      console.log('Error logging out: ', error)
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.usernameText}>Hello {username} !</Text>
    
      
      <View style={styles.upperHalf}>
      <View style={styles.row}>
        <Box
          imageSource={require('../../assets/smile.png')}
          text="Happy Log"
          onPress={() => handleBoxPress(1)}
        />
        <Box
          imageSource={require('../../assets/sad.png')}
          text="Sad Log"
          onPress={() => handleBoxPress(2)}
        />
      </View>
      <View style={styles.row}>
        <Box
          imageSource={require('../../assets/list.png')}
          text="TODO"
          onPress={() => handleBoxPress(3)}
        />
        <Box
          imageSource={require('../../assets/budget.png')}
          text="Budget"
          onPress={() => handleBoxPress(4)}
        />
      </View>
      </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleLogOut}>
          <Text style={styles.textStyle}>Log Out</Text>
        </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  upperHalf:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 70,
  },

  row: {
    flexDirection: 'row',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom:20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usernameText:{
    position:'absolute',
    top: 20,
    bottom: 20,
    left: 20,
    fontSize:18,
    fontWeight:'bold',
  },
  buttonStyle:{
    backgroundColor: '#BD1616',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 50
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  // titlecontainer:{
  //   marginBottom: 20,
  //   marginTop: 20,
  // }
});

export default MainPage;