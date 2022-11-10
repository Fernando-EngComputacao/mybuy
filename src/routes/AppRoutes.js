import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import IconHome from '../assets/home.svg';
import IconFavoritos from '../assets/heart.svg';    
import Favorito from '../screens/Favoritos';
import Inicio from './FavoritosRota';

export default function AppRoutes(){
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                let Icon = route.name !== "Favoritos" ? IconHome : IconFavoritos;

                return <Icon color={color} />
            },
            tabBarActiveTintColor: '#1f26ad',
        })}>
            <Tab.Screen name="Início" component={Inicio} />
            <Tab.Screen name="Favoritos" component={Favorito} /> 
        </Tab.Navigator>
    </NavigationContainer>
}