import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopHidro from './shophidro';
import { colors } from '../constants/themes';

const ButtonTab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <ButtonTab.Navigator
       initialRouteName='shop'
       
       screenOptions={{
            headerShown:false,
            
            tabBarLabelStyle:{
                color:colors.text,
                fontFamily:'Lato-Bold'
                
            }
       }}
    >
        <ButtonTab.Screen 
            name='shop'
            component={ShopHidro}
            options={{
                title:'Shop',
                tabBarIcon:({focused})=>(
                     <Ionicons
                        name= {focused ?'home': 'home-outline'}
                        size={22}
                        color={colors.primary}
                     />   
                )  
            }}
        />

        <ButtonTab.Screen 
            name='cartTab'
            component={CartNavigator}
            options={{
                    title:'Cart',
                    tabBarIcon:({focused})=>(
                        <Ionicons
                            name={focused?'cart':'cart-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
            }}
        />

        <ButtonTab.Screen 
            name='ordersTab'
            component={OrdersNavigator}
            options={{
                    title:'Orders',
                    tabBarIcon:({focused})=>(
                        <Ionicons
                            name={focused?'file-tray-full':'file-tray-full-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
            }}
        />

    </ButtonTab.Navigator>
  )
}

export default Tabs