import React from 'react'
import {FlatList} from 'react-native'
import {styles} from './styles'
//import {categories} from '../../constants/data/categories';
import { useSelector,useDispatch } from 'react-redux'; //acceder a los estados del store
import { CategoriaItem } from '../../components';
import { selectedCategory } from '../../store/actions';


const Categorias = ({navigation}) => {
   const dispatch = useDispatch()
   const categories =useSelector((state)=>state.category.categories)
    const onSelected = (item) => {
        dispatch(selectedCategory(item.id))
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