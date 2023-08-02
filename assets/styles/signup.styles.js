import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 86,
    width: "100%",
  },
  headTxt: {
    fontSize: 28,
    color: COLORS.primary,
    fontFamily: "popMid",
    marginBottom: 36,
  },
  viewForm: {
    width: "100%",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    height: 40,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "popBold",
    fontSize: SIZES.normal,
  },
  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
    marginTop: 10,
    marginBottom: 40,
  },
  dash: {
    width: 52,
    height: 2,
    backgroundColor: COLORS.black,
  },
  dividerText: {
    fontFamily: "popReg",
    fontSize: SIZES.normal,
  },
  signInOptions: {
    width: "100%",
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
    signInOptionsImage:{
        width: 30,
        height: 30,
    },
    callToAction: {
        width: "100%",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        gap: 2,
    },
    callQuestion: {
        fontFamily: 'popReg',
        fontSize: 12,
        color: COLORS.textGrayLight
    },
    callAction: {
        fontFamily: 'popReg',
        fontSize: 12,
        color: COLORS.primary
    }
});

export default styles;