import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';
import { Icon  } from 'react-native-elements'
import * as RootNavigation from '../router/RootNavigation'

const Header= () => {
  return (
    <View style={styles.head}>
      <View style={styles.menu}>
      <Icon
        size={40}
        name='menu'
        color='black'
        onPress={() => console.log('hello')} />
      </View>
      <Text style={styles.text} onPress={()=>RootNavigation.navigate("Home")}>Doggoo</Text>
      <View style={styles.like}>
        <Icon
          size={30}
          name='heartbeat'
          type='font-awesome'
          color='black'
          onPress={()=>RootNavigation.navigate('Like')}
          />
      </View>
    </View>
  );
}

export default Header;