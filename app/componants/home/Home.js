import { Image, ScrollView, View, Text, Button, ImageBackground } from "react-native";
import styles from "./style";
import { useRef, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../constants";


const Home = ({ navigation }) => {
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
    var i = 0;

    const scroll = useRef(21);

    const GetRandom = ({ img, height }) => {
        const [width, setWidth] = useState(0)
        Image.getSize(img, (x, y) => {
            setWidth(x * height / y);
        })

        return (
            <ImageBackground
                src={img}
                style={[styles.rowItem, { width: width }]}
            >
                <Text numberOfLines={1} style={styles.text}>Inside</Text>
                
            </ImageBackground>

        );
    }

    const GetAllBread = ({ img, width }) => {
        const [height, setHeight] = useState(0)
        Image.getSize(img, (x, y) => {
            setHeight(y * width / x);
        })

        return (
            <ImageBackground
                src={img}
                style={[styles.allbread, { height: height }]}
            >
                <LinearGradient  style={styles.aboutDog}
                    colors={['#ffffff00','#272727cc']}>
                    <Text style={styles.gallaryText} >Inside</Text>
                </LinearGradient>
            </ImageBackground>

        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Random Bread</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.row} horizontal={true}>
                    {
                        data.map((data, i) => <GetRandom img={data} height={250} key={i} />)
                    }
                </ScrollView>
                <Text style={styles.heading}>All Bread</Text>

                <View style={styles.all}>
                    {
                        data.map((data, i) => <GetAllBread img={data} width={160} key={i} />)
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;
