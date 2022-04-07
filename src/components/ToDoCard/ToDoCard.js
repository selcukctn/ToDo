import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import styles from './ToDoCard.styles';
const {width,height} = Dimensions.get('window');
const ToDoCard = ({todo2}) => {
    console.log('card todo2:'+todo2.text+todo2.color);
    const styles = StyleSheet.create({
        container:{
            backgroundColor:todo2.color,
            width:width/1.08,
            height:height/12,
            borderRadius:6,
            padding:10,
            margin:10,
        },
        second_container:{
            backgroundColor:'white',
            width:width/1.08,
            height:height/12,
            borderRadius:6,
            padding:10,
            margin:10
        },
        inner_container:{
        },
        text:{
            fontSize:70,
            fontFamily:'Hallywood',
        },
        text_pressed:{
            fontSize:21,
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid'
        },
    })
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text numberOfLines={1} style={styles.text}>{todo2.text}</Text>
            </View>
        </View>
    )
}
export default ToDoCard;