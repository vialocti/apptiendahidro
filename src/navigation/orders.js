import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OrdersScreen } from '../screens'
import { colors } from '../constants/themes'
import { isAndroid } from '../utils/functions'
const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='orders'
        screenOptions={{
            headerSyle:{
                backgroundColor:isAndroid?colors.primary:colors.secondary,
            },
            headerTinColor:colors.text,
            
            headerTitleStyle:{
                    fontFamily:'Lato-Bold'
            },
        }}
    >
        <Stack.Screen 
            name='orders'
            component={OrdersScreen}
        />
    
    </Stack.Navigator>
  )
}

export default OrdersNavigator