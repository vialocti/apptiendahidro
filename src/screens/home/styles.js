import {StyleSheet} from 'react-native'
import { colors } from '../../constants/themes'

export const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.backgroundMain,
    },
    TamanioImage:{
        width:200,
        height:200,
        marginVertical:10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#77FF77",
        padding: 10,
        borderWidth:2,
        borderColor:'#11FF11',
        borderRadius:20,
      },
    titleingreso:{
        fontFamily:'Lato-Bold',
        fontSize:25,
        

    },
    titlemain_1:{
        fontFamily:'Lato-Bold',
        fontSize:32,
        padding:10,
        marginBottom:40,
        color:colors.titulop,
    },
    titlemain:{
        fontFamily:'Lato-Bold',
        fontSize:28,
    },
})