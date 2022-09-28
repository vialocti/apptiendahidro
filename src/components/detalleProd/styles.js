import { StyleSheet } from "react-native"
import { colors } from "../../constants/themes"

export const styles= StyleSheet.create({

    containerCard:{
        margin:20,
        paddingVertical: 20,
        paddingHorizontal:10,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.43,
        shadowRadius: 4.62,
        elevation: 7,
        backgroundColor: colors.background,
        borderRadius: 20,

    }
}) 