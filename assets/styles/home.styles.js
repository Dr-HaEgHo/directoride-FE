import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    safeContainer: {
        width: "100%",  
        backgroundColor:COLORS.white,
        flex: 1
    },
    container: {
        width: "100%",
        alignItems: "center",
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    headText: {
        fontFamily: 'popBold',
        fontSize: 24,
        color: COLORS.primary,
    }
})

export default styles;