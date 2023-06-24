import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const Box = ({ imageSource, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const handleBoxPress = (boxId) => {
    console.log(`Box ${boxId} pressed`);
    // Perform desired action when a box is pressed
  };

  return (
    <View style={styles.container}>
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
    marginBottom: 350,
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
});

export default App;