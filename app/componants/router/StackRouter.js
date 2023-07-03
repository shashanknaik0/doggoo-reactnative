import React from 'react';
import Home from '../home/Home';


import { createStackNavigator } from '@react-navigation/stack';
import Like from '../likes/Like';

const StackRouter = () => {
    const Stack = createStackNavigator();
    const options ={
        headerShown: false,
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={options}/>
            <Stack.Screen name="Like" component={Like} options={options}/>
        </Stack.Navigator>
    );
}

export default StackRouter;