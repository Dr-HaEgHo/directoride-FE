import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ArrowRight2 } from "iconsax-react-native";
import { COLORS } from "../constants";
import { useSelector } from "react-redux";

const RiderCards = () => {
  const { width } = useWindowDimensions();

  const riders = useSelector((state) => state.riders.ridersList);

  return (
    <View style={a.container}>
      <View style={a.top}>
        <Text style={a.recent}>Recent riders</Text>
        <TouchableOpacity style={a.touchable}>
          <Text style={a.view}>View All</Text>
          <ArrowRight2 size="14" color="#19196F" />
        </TouchableOpacity>
      </View>

      <View style={a.cardWrapper}>
        {riders ? (
          riders.map((item) => (
            <View style={a.card}>
              <View style={a.cardTop}>
                <Image
                  source={{ uri: item.profileImage }}
                          width={160}
                          height={160}
                  resizeMode="contain"
                />
              </View>
              <View style={a.cardBottom}>
                <View style={a.nameIcon}>
                  <Image
                    source={require("../assets/icons/bike.png")}
                    width={20}
                    height={20}
                    resizeMode="contain"
                  />
                  <Text style={a.username}>
                    {item.firstName} {item.lastName}
                  </Text>
                </View>
                <Text style={a.bikename}>
                  Bike Type: {item.bikeType} {item.bikeYear}
                </Text>
                <View style={a.rating}>
                  <Text style={a.rate}>({item.rating})</Text>
                  <Text style={a.star}>⭐</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default RiderCards;

const a = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.appYellow,
    marginTop: 20,
    width: "100%",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  recent: {
    fontFamily: "popMid",
    color: COLORS.primary,
    fontSize: 16,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  view: {
    fontFamily: "popReg",
    color: COLORS.primary,
    fontSize: 12,
  },
  cardWrapper: {
    width: "100%",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent:"space-between"
    },
    card: {
        height: 180,
        width: "47%",
        borderRadius: 10,
        backgroundColor: COLORS.primary5,
        overflow: "hidden",
        marginBottom: 16
  },
  cardTop: {
    height: "46%",
    width: "100%",
      backgroundColor: COLORS.appYellow,
    overflow:"hidden"
  },
  cardBottom: {
      paddingTop: 16,
      paddingHorizontal: 10
  },
  nameIcon: {
      flexDirection: "row",
    //   alignItems: "center",
    gap: 8,
  },
  username: {
    fontFamily: "popReg",
    color: COLORS.primary,
    fontSize: 14,
    marginBottom: 8,
  },
  bikename: {
    fontFamily: "popReg",
    color: COLORS.textGrayLight,
    fontSize: 12,
  },
  rating: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    marginTop: 8
  },
  rate: {
    fontFamily: "popReg",
    color: COLORS.textGrayLight,
    fontSize: 12,
    },
    star: {
      fontSize: 12
  }
});
