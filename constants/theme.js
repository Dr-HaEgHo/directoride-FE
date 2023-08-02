const COLORS = {
  primary: "#19196F",
  primary5: "rgba(25, 245, 111, 0.05)",

  white: "#FFFFFF",
  darkWhite: "#F7F7F7",
  black: "#000000",
  blackTen: "rgba(0, 0, 0, 0.12)",
  black4: "rgba(0, 0, 0, 0.4)",
  blackOne: "rgba(0, 0, 0, 0.01)",

  cardGray: "#F3F3F3",
  cardGraynote: "#FAFAFA",
  textGrayLight: "#BABABA",
  shadowGray: "#EDEDED",
  shadow: "#f7f7f7",
  textGray: "#373737",
  appYellow: "#FFDE2A",

  active: "#34A853",
  error: "#C71F1F",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  normal: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const FONT = {
    black: "popBlack",
    bold: "popBold",
    extraBold: "popEBold",
    semiBold: "popSBold",
    medium: "popMid",
    regular: "popReg",
    light: "popLight",
    extraLight: "popELight",
    thin: "popThin",
};

const SHADOWS = {
  small: {
    shadowColor: COLORS.blackTen,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.blackTen,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: COLORS.blackTen,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 8.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, FONT, SHADOWS };