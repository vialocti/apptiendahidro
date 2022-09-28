import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {styles} from './styles'

const ProductoItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.detail}>Presentacion: {item.dimcap}</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

export default ProductoItem