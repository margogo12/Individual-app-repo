import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SignUpFail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opps</Text>
      <Text style={styles.textStyle}>We're sorry. Please come back when you reach 18 years old!</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.goBack('Home')}>
        <Text style={styles.textStyle}>Back to home page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
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
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});