import React from 'react'
import {View, Button, FlatList} from 'react-native'
import {styles} from './styles'
import {categories} from '../../constants/data/categories';
import { CategoriaItem } from '../../components';


const Categorias = ({navigation}) => {
    
    const onSelected = (item) => {
        navigation.navigate('Productos', { name: item.title, categoryId: item.id });
    }
    
    const renderItem = ({ item }) => <CategoriaItem item={item} onSelected={onSelected} />
        
    
  return (
    <FlatList
        data={categories}
        keyExtractor={item=>item.id.toString()}
        renderItem={renderItem} 
    
            
        />
   
  )
}

export default Categorias