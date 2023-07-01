import { useState, useEffect } from "react";
import { View, Button, Alert } from 'react-native';
import { useDispatch } from "react-redux";

export default function MyButton({title, color}) {
    const [newTitle, setNewTitle] = useState(title)

    const dispatch = useDispatch();

  // useEffect(()=>{
  //   Alert.alert('component rendered')
  // })
  // useEffect(()=>{
  //   Alert.alert('new title been set')
  // },[newTitle]
  // )

  function changeOnPress(){
    dispatch({type: 'changeUsername', payload: 'Sidd'})
  }
  return (
    <View>
      <Button 
        title={newTitle}
        color={color}
        onPress={changeOnPress}
      />
    </View>
  );
}