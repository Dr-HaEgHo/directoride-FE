import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const a = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
  backLove: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blurSection: {
    backgroundColor: COLORS.black4,
    marginTop: 120,
    paddingTop: 10,
  },
  nameRating: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: "popMid",
    fontSize: 16,
    color: COLORS.white,
  },
  rating: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100,
  },
  number: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: "popSBold",
  },
  star: {
    fontSize: 10,
  },
  locationView: {
    width: "100%",
    flexDirection: "row",
      paddingHorizontal: 20,
    paddingBottom: 16
    },
    location: {
        fontSize: 12,
        fontFamily: "popReg",
        color: COLORS.white,
    },
    tabs: {
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
        paddingTop: 22,
        paddingBottom: 10,
        paddingHorizontal: 10,
        flexDirection:"row"
    },
    tab: {
        width: "50%"
    }
});