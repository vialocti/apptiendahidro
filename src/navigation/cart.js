import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { CartScreen } from '../screens'
import {isAndroid} from '../utils/functions';
 import {colors} from '../constants/themes/colors'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='cart'
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
            name='cart'
            component={CartScreen}
        />        
    </Stack.Navigator>
  )
}

export default CartNavigator