import React from "react";
import {Text, StyleSheet} from 'react-native'

const CustomText = ({style}) =>{
    return(<Text style={[styles.text,style]} />
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'YsabeauSC',
    }
})

export default CustomText