import React from 'react'
import { View,Text,FlatList,TouchableOpacity } from 'react-native'
import { CartItem } from '../../components';
import {cart} from '../../constants/data';
import {styles} from './styles'

const CartScreen = ({navigation}) => {
  
    const total = 3500;
    
    const onDelete = (id) => {
        console.warn('borrar el articulo ' + id);
    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
           <FlatList 
                data={cart}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm}
                    onPress={() => null}
                >
                    <Text style={styles.textButtonConfirm}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default CartScreen