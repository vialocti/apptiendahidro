import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Inicio, Categorias,Productos,DetalleProducto} from '../screens/index';


const Stack = createNativeStackNavigator();

const ShopHidro = () => {
  return (
    <Stack.Navigator
    initialRouteName="Inicio"
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
            options={{
                title: 'Productos',
            }}
        />
        <Stack.Screen 
            name="DetalleProducto"
            component={DetalleProducto} 
            options={{
                title: 'Detalle Producto',
            }}
        />
    </Stack.Navigator>
  )
}

export default ShopHidro