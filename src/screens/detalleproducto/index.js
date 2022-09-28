import React from 'react'
import {View, Text} from 'react-native'
import { CardDetalle } from '../../components';
import { products } from '../../constants/data/products';
import {styles} from './styles'


const DetalleProducto = ({navigation,route}) => {
  
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);
    
    return (
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
  )
}

export default DetalleProducto