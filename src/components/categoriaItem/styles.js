import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
         borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        height: 90,
    },
    contentContainer: {
        flex: 1,
        marginTop:20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    }
});