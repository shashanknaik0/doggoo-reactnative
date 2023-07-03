import { StyleSheet } from 'react-native';
import { BOX, COLORS, FONT } from '../../constants';

const styles = StyleSheet.create({
    head: {
        padding:BOX.pSmall,
        backgroundColor: COLORS.primarybg,
        paddingHorizontal:BOX.pLarge,
        flexDirection:"row"
    },
    menu:{
        left:0,
        marginRight:BOX.pMedium
    },
    text:{
        fontStyle: "italic",
        fontSize: FONT.large,
        fontWeight: "bold",
        color : COLORS.primarfont,
    },
    like:{
        position: "absolute",
        right:20,
        marginTop:BOX.mMedium,
    }
});

export default styles;