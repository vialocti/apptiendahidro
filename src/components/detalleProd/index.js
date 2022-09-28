import React  from 'react'
import { View } from 'react-native'
import {styles} from './styles'



const CardDetalle = ({children})=>{
   return(
    <View style={styles.containerCard}>
        {children}
    </View>
   )
}

export default CardDetalle