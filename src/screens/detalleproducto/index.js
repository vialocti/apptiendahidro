import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { CardDetalle } from '../../components';
import { products } from '../../constants/data';
import {styles} from './styles'


const DetalleProducto = ({navigation,route}) => {
  
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);
    
    return (
        <View style={styles.container}>
        <CardDetalle style={styles.container}>
            
            <Text style={styles.titleproducto}>{product.title}</Text>
            <Text style={styles.subtitle}>Descripcion:</Text>
            <Text>{product.description}</Text>
            <Text style={styles.subtitle}>Presentacion:</Text>
            <Text>{product.dimcap}</Text>
            <Text style={styles.subtitle}>Precio: ${product.price}</Text>
            <Text stile={styles.linea}></Text>
            <Text style={styles.titleimport}>Importante</Text>
            <Text>Comprando mas de 10 productos descuentos del 5%</Text>
            
        </CardDetalle>

        <TouchableOpacity
                style={styles.button}
                onPress={()=>{navigation.navigate('Categorias')}}
            >
            <Text style={styles.titleingreso}> Ir a Categorias </Text>
            
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{navigation.navigate('Inicio')}}
            > 
            <Text style={styles.titleingreso}> Ir a Inicio </Text>
            
            </TouchableOpacity>
        
        </View>
  )
}

export default DetalleProducto