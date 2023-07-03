import React from 'react';
import Gallery from '../gallery/Gallery';
import { Text } from 'react-native';

const Like = () => {
    const data = [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1145.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_115.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1150.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_11570.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1186.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1234.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1259.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_12664.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_12879.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_12945.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_13145.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_13270.jpg",
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


    return (

        <Gallery 
            data={data} 
            columns={2}
            innerStyles={{
                justifyContent:"center",
                alignItems:'center'
            }}
            inner={
                <Text style={{fontSize:25,lineHeight:30}}>
                    helllo
                </Text>
            }
        />
    );
};


export default Like;