import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToDoCard from "../components/ToDoCard";
import ToDoInput from '../components/ToDoInput'


const HomePage = ()=>{
  const [text,setText] = useState('');
  const [todo,setToDo] = useState([]);
  const [todo2,setToDo2] = useState([]);
  const [color,setColor] = useState('#519259');
  const [id,setID]=useState(0);
  console.log('App.js:'+JSON.stringify(todo));

  function renderToDoCard({item}){
    if(item.text!=''){
      return(
        <TouchableOpacity activeOpacity={0.7} onLongPress={() => deleteToDo(item)}>
          <ToDoCard todo2={item} getData={getData}/>
        </TouchableOpacity>
      )
    }
  }
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('todo', jsonValue)
    } catch (e) {
      console.log('Store Data Error');
    }
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todo')
      setToDo2(JSON.stringify(jsonValue));
      console.log('settodo2 getdata:'+JSON.stringify(todo2))
      return jsonValue;
    } catch(e) {
      console.log('getData Error...')
    }
  }
  clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Clear data error')
    }
  
    console.log('Done.')
  }
  const deleteToDo = item =>{
    //setColor(colors[randomColorGenerator()]);
    setToDo(todo.filter(i => i !== item));
    setID(id-1);
    clearAll();
    storeData(todo);
    return Alert.alert('Deleted');
  }

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#F5EEDC"} barStyle="dark-content"/>
      <View style={styles.header}>
        <Text style={styles.header_title}>To Do</Text>
        <View style={styles.todoNumber}>
          <Text style={styles.header_title}>{todo.length}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList data={todo} renderItem={renderToDoCard}/>
      </View>
      <View style={styles.bottom}>
        <ToDoInput storeData={storeData} todo={todo} setToDo={setToDo} text={text} setText={setText} color={color} setColor={setColor} id={id} setID={setID}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5EEDC',
    justifyContent:'space-around',
  },
  header:{
    flex:0.4,
    margin:14,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  header_title:{
    fontSize:100,
    fontFamily:'Hallywood',
    color:'#9E7777'
  },
  body:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',

  },
  bottom:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})

export default HomePage;