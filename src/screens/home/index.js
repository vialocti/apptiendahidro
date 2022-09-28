import React from 'react'
import {View, Button} from 'react-native'
import {styles} from './styles'

const Inicio = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Button 
        title='Ir a ...'
        onPress={()=>{navigation.navigate('Categorias')}}
    />

</View>
  )
}

export default Inicio