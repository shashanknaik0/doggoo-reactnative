import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.primarybg,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default styles;