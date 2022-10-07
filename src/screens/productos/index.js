import React,{useEffect} from 'react'
import {FlatList} from 'react-native'
import { ProductoItem } from '../../components'
//import { products } from '../../constants/data'
import {styles} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts,selectedProduct } from '../../store/actions'

const Productos = ({navigation}) => {
    const dispatch=useDispatch()
    
    const selectedCategory = useSelector((state)=>state.category.selected)
    const productsFiltered = useSelector((state)=>state.products.filteredProducts)
    
    useEffect(() => {
         
      dispatch(filterProducts(selectedCategory.id))  
      
    }, [])
    
    const onSelected = (item) => {
      dispatch(selectedProduct(item.id))
       navigation.navigate('DetalleProducto', { name: item.title});
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