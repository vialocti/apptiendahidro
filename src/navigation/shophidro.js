import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Inicio, Categorias,Productos,DetalleProducto} from '../screens/index';


const Stack = createNativeStackNavigator();

const ShopHidro = () => {
  return (
    <Stack.Navigator
    initialRouteName="Inicio"
    screenOptions={{
        headerStyle: {
            backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
            fontFamily: 'Lato-Bold',
        },
    }}
        >
        <Stack.Screen 
            name="Inicio"
            component={Inicio} 
            options={{
                title: 'ShopHidroponico',
            }}
        />
        <Stack.Screen 
            name="Categorias"
            component={Categorias} 
            options={{
                title: 'Categorias',
            }}
        />
        <Stack.Screen 
            name="Productos"
            component={Productos} 
            options={({route})=>({
                title: route.params.name,
            })}
        />
        <Stack.Screen 
            name="DetalleProducto"
            component={DetalleProducto} 
            options={({route})=>({
                title: route.params.name,
            })}
        />
    </Stack.Navigator>
  )
}

export default ShopHidro