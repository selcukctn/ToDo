import React from "react";
import {TextInput, TouchableOpacity, View, Text, Alert, Dimensions} from 'react-native';

import styles from './ToDoInput.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

let a =width/50;
console.log('a:'+a);
const colors=['#519259','#DD4A48','#C37B89','#6B7AA1','#5E8B7E','#DA7F8F','#865858'];
const {width,height} = Dimensions.get('window');
const ToDoInput = ({text,setText,todo,setToDo, storeData, setColor,color,setID,id}) =>{
    function randomColorGenerator(){
        return Math.floor(Math.random() * ( 7 - 0)) + 0;
    }
    const setSave = ()=>{
        if(text==''){
            return Alert.alert('You didn`t add');
        }
        else{
            setColor(colors[randomColorGenerator()]);
            setToDo([...todo,{text,color,id}]);
            storeData(todo);
            setID(id+1);
            setText("");
            console.log('has been added');
            return Alert.alert('Your note has been added');
        }
    }
    const handleChange = item => setText(item);
    return(
        <View style={styles.container}>
            <TextInput
                maxLength = {width/50}
                placeholderTextColor={'white'}
                placeholder="To do ..."
                style={styles.input}
                onChangeText={handleChange}
                value={text}
            />
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={setSave}>
                    <Text style={styles.button_text}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToDoInput;