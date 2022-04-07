import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        width:width/1.08,
        height:height/6,
        borderRadius:10,
        backgroundColor:'#9E7777',
        justifyContent:'space-around'
    },
    input:{
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 15,
        fontSize:70,
        height:height/9,
        color:'#FAEDF0',
        fontFamily:'Hallywood'
    },
    button:{
        width:width/1.08,
        alignItems:'center',
        marginBottom:10
    },
    button_text:{
        fontSize:70,
        fontFamily:'Hallywood',
        color:'#FAEDF0'
    },
})