import {StyleSheet} from 'react-native'
import { colors } from '../../constants/themes'

export const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleproducto:{
        fontFamily:'Lato-Bold',
        fontSize:18,
         textAlign:'left'
    },
    subtitle:{
        fontFamily:'Lato-Bold',
        fontSize:14,
        color:colors.secondary,
        paddingTop:5,
    },

    titleimport:{
        fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.import,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDEEEE",
        padding: 10,
        marginBottom:5,
        width:200,
        borderWidth:2,
        borderColor:'#AAFFAA',
        borderRadius:15,
      },
    titleingreso:{
        fontFamily:'Lato-Bold',
        fontSize:20,
        

    },
})