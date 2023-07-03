import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { StatusBar } from "react-native";
import { Platform, StyleSheet, Text, SafeAreaView } from "react-native";


const Practice = () => {
    const img = [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1335.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_13502.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1357.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1370.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_13879.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_13909.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1406.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1410.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1459.jpg",
    ]

    const GetImage=({img})=>{
        const [width,setWidth] = useState(0)
        Image.getSize(img,(x,y)=>{
            setWidth(x*200/y);
        })

        return (
            <Image
                src={img}
                style={[styles.img1,{width: width}]}
            />);
    }

    
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>

            </View>
            {
                img.map((img)=><GetImage img={img}/>)
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
        // width:100,
        // height:0,
        backgroundColor: 'yellow',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal:10,
        flexDirection:'row',
        // flexWrap:"wrap",
        // justifyContent:"space-evenly",
        // alignContent:"space-around",
    },
    img1:{
        height:200, 
        // width:200,   
        // resizeMode:"stretch",
        margin:0,
    },
    view1:{
        width:100,
        height:200,
        backgroundColor:"pink",
    },
    view2:{
        
        width:100,
        height:100,
        backgroundColor:"blue",
    },
    view3:{
        width:100,
      
        height:100,
        backgroundColor:"orange",
    },
    view4:{
      
        width:100,
        height:100,
        backgroundColor:"red",
    },
});


export default Practice;