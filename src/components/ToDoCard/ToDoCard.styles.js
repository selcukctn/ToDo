import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get('window'); 


const colors=['#519259','#8267BE','#F05454','#F2FFE9','#F999B72','#9A0680'];
function randomColorGenerator(){
    return Math.floor(Math.random() * ( 6 - 0)) + 0;
}
console.log("Random Color Number:"+randomColorGenerator());
let color = colors[randomColorGenerator()];
console.log("Random Color:"+color);
export default StyleSheet.create({
    container:{
        backgroundColor:color,
        width:width/1.08,
        height:height/12,
        borderRadius:6,
        padding:10,
        margin:10
    },
    second_container:{
        backgroundColor:'white',
        width:width/1.08,
        height:height/12,
        borderRadius:6,
        padding:10,
        margin:10
    },
    text:{
        fontSize:21,
        fontFamily:'Hallywood',
    },
    text_pressed:{
        fontSize:21,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
})