import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MenuScreen from "../screens";

export default function FavoritosRota(){
    const Stack = createNativeStackNavigator();

    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
    </Stack.Navigator>
}