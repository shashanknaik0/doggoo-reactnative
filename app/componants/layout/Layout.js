import { SafeAreaView } from 'react-native';
import styles from './style';

import { NavigationContainer } from '@react-navigation/native';
import StackRouter from '../router/StackRouter';
import Header from '../header/Header';
import { navigationRef } from '../router/RootNavigation';
import { COLORS } from '../../constants';

const Layout = () => {
    const MyTheme = {
        dark: false,
        colors: {
          background: COLORS.primarybg,
        },
      };

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <NavigationContainer ref={navigationRef}  theme={MyTheme}>
                <StackRouter />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default Layout;