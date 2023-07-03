import { StyleSheet } from 'react-native';
import { BOX, COLORS, FONT } from '../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    container:{
        marginHorizontal:BOX.mSmall+BOX.mLarge,
    },
    row:{
        width:"100%",
        height:250,
        paddingVertical:BOX.pMedium,
    },

    all:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        alignItems:"center"
    },
    heading:{
        fontSize: FONT.medium,
        fontWeight: "bold",
        marginTop:BOX.mSmall,
    },
    text: {
        backgroundColor:'#20232a6b',
        color: 'white',
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rowItem:{
        height:"100%",
        justifyContent:"flex-end",
        borderWidth:BOX.bMedium,
        borderColor:COLORS.secondarybg,
        marginRight:BOX.mLarge,
        borderRadius:25,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,  
        elevation: 7
    },
    allbread:{
        width:160,
        marginVertical:BOX.mMedium,
        justifyContent:"flex-end",
        
        borderWidth:0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,  
        elevation: 5
    },
    gallaryText:{
        color: COLORS.primarybg,
        fontSize: FONT.small,
        fontWeight: 'bold',
        marginHorizontal:BOX.mMedium,
        marginBottom:BOX.mSmall,
    },
    aboutDog:{
        height:"30%",
        justifyContent:"flex-end"
    },
});

export default styles;