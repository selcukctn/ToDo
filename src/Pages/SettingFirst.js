import React from "react";
import {SafeAreaView, View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');



const SettingFirst = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box_container}>
                <Text style={{fontSize:20,marginTop:50}}>Select Your Color</Text>
                <View style={styles.up_boxes}>
                    <View style={styles.box}>
                        <View style={{flex:1,backgroundColor:'#519259'}}/>
                        <View style={{flex:1,backgroundColor:'#DD4A48'}}/>
                        <View style={{flex:1,backgroundColor:'#C37B89'}}/>
                    </View>
                    <View style={styles.box}>
                        <View style={{flex:1,backgroundColor:'#519259'}}/>
                        <View style={{flex:1,backgroundColor:'#DD4A48'}}/>
                        <View style={{flex:1,backgroundColor:'#C37B89'}}/>
                    </View>
                </View>
                <View style={styles.down_boxes}>
                    <View style={styles.box}>
                        <View style={{flex:1,backgroundColor:'#519259'}}/>
                        <View style={{flex:1,backgroundColor:'#DD4A48'}}/>
                        <View style={{flex:1,backgroundColor:'#C37B89'}}/>
                    </View>
                    <View style={styles.box}>
                        <View style={{flex:1,backgroundColor:'#519259'}}/>
                        <View style={{flex:1,backgroundColor:'#DD4A48'}}/>
                        <View style={{flex:1,backgroundColor:'#C37B89'}}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box_container:{
        height:height/2,
        width:width,
        justifyContent:'center',
        alignItems: 'center',
    },
    up_boxes:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    down_boxes:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    box:{
        width:width/3,
        height:width/3,
        backgroundColor:'#fff',
        margin:50,
        borderRadius:10,
    }
})

export default SettingFirst;