import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SearchNormal1 } from "iconsax-react-native";
import { COLORS, SHADOWS } from "../constants";

const HomeSearch = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SearchNormal1 style={styles.icon} size="16" />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="search bikes" />
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 100,
    width: "100%",
    ...SHADOWS.large,
    marginVertical: 24,
  },
  icon: {
    color: COLORS.primary,
  },
    input: {
        width: "100%",
        flex: 1,
        fontFamily: "popReg",
        fontSize: 16
  }
});
