import React from "react";
import {SafeAreaView, View, Text, Image, Dimensions, StyleSheet, StatusBar} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const {width,height} = Dimensions.get('window');

const pageItem =[
    {
        image:require('../img/todo.png'),
        title:'I`m best To-Do App',
        buttonText:'Gets Started',
        desc:'Hadi Özelleştirelim',
    },
    {
        image:require('../img/todo.png'),
        title:'second',
        buttonText:'Gets Started',
        desc:'Hadi Özelleştirelim',
    },
    {
        image:require('../img/todo.png'),
        title:'third',
        buttonText:'Gets Started',
        desc:'Hadi Özelleştirelim',
    }
]
const OnBoarding = ({navigation})=>{
    const [currentSlideIndex,setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Slide = ({item}) => {
            return(
                <View style={styles.slide}>
                    <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.slide_title}>{item.title}</Text>
                    <Text style={styles.slide_desc}>{item.desc}</Text>
                </View>
            )
    }
    const updateSlideIndex = (e) =>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX/width);
        setCurrentSlideIndex(currentIndex);
    }
    const Footer = () =>{
        return(
            <View style={styles.footer_container}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    {pageItem.map((_,index)=><View key={index} style={[styles.indicator, currentSlideIndex == index && {
                        backgroundColor:'#fff',width:25
                    }]}/>)}
                </View>
                <View style={styles.button_container}>
                    {
                        currentSlideIndex == pageItem.length - 1 ? (<TouchableOpacity onPress={()=>navigation.navigate('SettingFirst')} style={styles.button}>
                        <Text style={styles.button_half2_text}>GET STARTED</Text>
                    </TouchableOpacity> ):( <View style={styles.button_container}><TouchableOpacity style={styles.button_half1} onPress={skipSlide}>
                        <Text style={styles.button_half1_text}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_half2} onPress={goNextSlide}>
                        <Text style={styles.button_half2_text}>NEXT</Text>
                    </TouchableOpacity></View>)
                   
                    }
                    

                </View>
            </View>
        )
    }
    const goNextSlide = () =>{
        const nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex != pageItem.length){
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }
    const skipSlide = () =>{
        const lastSlideIndex= pageItem.length-1;
            const offset = lastSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(lastSlideIndex);
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#A68DAD'}/>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateSlideIndex}
                data={pageItem}
                renderItem={({item})=><Slide item={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Footer/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#A68DAD'
    },
    footer_container:{
        height:height * 0.25,
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:50,
    },
    button_container:{
        flexDirection:'row',
        width:width,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    button:{
        width:width/2,
        height:height/15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'white',
        marginLeft:30,
        borderRadius:10,
    },
    button_half1:{
        width:width/4,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:2,
        marginRight:30,
        height:height/15,
        borderRadius:10,
        borderColor:'#fff'
    },
    button_half2:{
        width:width/4,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'white',
        marginLeft:30,
        height:height/15,
        borderRadius:10,
    },
    button_half1_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    button_half2_text:{
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        height:'75%',
        width: width
    },
    slide:{
        alignItems:'center',
    },
    slide_title:{
        fontWeight:'bold',
        fontSize:40,
        marginTop:30,
        color:'#fff'
    },
    slide_desc:{
        fontSize:20,
        marginTop:10,
        color:'#fff'
    },
    indicator:{
        height:2.5,
        width:10,
        backgroundColor:'#fff',
        marginHorizontal:3,
        borderRadius:2,
    },
})

export default OnBoarding;