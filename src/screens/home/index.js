import React from 'react'
import {Text,View, TouchableOpacity,Image} from 'react-native'
import {styles} from './styles'

const Inicio = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.titlemain_1}>Proyecto O</Text>
    <Text style={styles.titlemain}>Shop Hidroponia </Text>
    <View >
    <Image source={require('../../../assets/imageninicio.jpg')} style={styles.TamanioImage} />
    </View>
    <TouchableOpacity
    style={styles.button}
     onPress={()=>{navigation.navigate('Categorias')}}
    >
      <Text style={styles.titleingreso}> Ingresar </Text>
    </TouchableOpacity>

</View>
  )
}

export default Inicio