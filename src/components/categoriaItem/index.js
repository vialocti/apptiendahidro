import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {styles} from './styles'

const CategoriaItem = ({item,onSelected}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity 
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
    </TouchableOpacity>
</View>
  )
}

export default CategoriaItem