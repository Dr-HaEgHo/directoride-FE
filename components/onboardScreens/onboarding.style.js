import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
    },
    containerItem: {
        flex: 1,
        // height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
    },
    text: {
        color:COLORS.textGray
    },
    imageItem: {
        flex: 1,
        height:"100%",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        padding: 10
    },
    absoluteView: {
        position: "absolute",
        textAlign: "left",
        width: "100%",
        paddingHorizontal:16,
    },
    titleText: {
        fontSize: 36,
        fontWeight: 700,
        color: COLORS.white,
        fontFamily: "popEBold"
    },
    titleTextLight: {
        fontSize: 38,
        fontWeight: 300,
        color: COLORS.white,
        fontFamily: "popReg"
    },
    descText: {
        fontSize: 16,
        color: COLORS.white,
        fontFamily: "popReg",
        marginTop: 20
    }
})

export default styles; 