import React from 'react'
import {FlatList} from 'react-native'
import { ProductoItem } from '../../components'
import { products } from '../../constants/data/products'
import {styles} from './styles'

const Productos = ({navigation,route}) => {
    
    const { categoryId } = route.params;

    const productsFiltered =  products.filter(product => product.categoryId === categoryId);
    const onSelected = (item) => {
       navigation.navigate('DetalleProducto', { name: item.title, productId: item.id });
    };   
    const renderItem = ({ item }) => <ProductoItem item={item} onSelected={onSelected} />

 
    return (
    
    <FlatList
        data={productsFiltered}
        keyExtractor={item =>item.id.toString()}
        renderItem={renderItem}
    
    />

    
  )
}

export default Productos