import React from "react";
import MainScreen from '../Screens/MainScreen';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return( <NavigationContainer>
        <Stack.Navigator initialRouteName="Регистрация">
            <Stack.Screen name="Главная" component={MainScreen} backgroundColor={'white'} options={{title: "Главная",headerStyle: {backgroundColor: 'pink',}}}/>
            <Stack.Screen name="Регистрация" component={LoginScreen} options={{title: "Регистрация", headerStyle: {backgroundColor: 'pink'}}}/>
            <Stack.Screen name="Проверка" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
};