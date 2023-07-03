import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BOX, COLORS } from '../../constants';

const ShowImage = ({ width, img, inner, innerStyles }) => {
    const [height, setHeight] = useState(0)
    Image.getSize(img, (x, y) => {
        setHeight(y * width / x);
    })

    return (
        <ImageBackground
            src={img}
            style={[{
                width: "100%", height: height,
                borderWidth: BOX.bSmall,
                borderColor: COLORS.secondarybg,
                marginRight: BOX.mLarge,
                overflow: 'hidden',  
            },innerStyles]}
        >
            {inner}
        </ImageBackground>

    );
}

const Grid = ({ data, index, columns,inner, innerStyles}) => {
    imgArray = []

    for (let i = index; i < data.length; i += columns) {
        imgArray.push(<ShowImage img={data[i]} width={170} key={i} inner={inner} innerStyles={innerStyles}/>)
    }

    return (
        <>
            {imgArray}
        </>
    );
}

const Gallery = ({ data, columns, inner, innerStyles }) => {

    var grid = []

    for (let i = 0; i < columns; i++) {
        grid.push(
            <View style={{ flex: 1 }} key={i}>
                <Grid data={data} index={i} columns={columns} inner={inner} innerStyles={innerStyles} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 20 }}>
                {grid}
            </View>
        </ScrollView>
    );
}

export default Gallery;