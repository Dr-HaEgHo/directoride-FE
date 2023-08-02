import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { getAllRiders } from "../redux/riders/ridersAction";

const RecentRiders = () => {

  const router = useRouter();
  const dispatch = useDispatch()

  const [riderLoading, setRiderLoading] = useState(false);
  const [riders, setRiders] = useState([]);

  const ridersState = useSelector(state => state.riders.ridersList);
  const isRiderLoading = useSelector(state => state.riders.ridersLoading);

  
  useEffect(() => { 
    setRiders(ridersState.slice(0, 4))
  }, [])
  console.log("my new riders", riders)

  useEffect(() => { 
    if (isRiderLoading === true) {
      setRiderLoading(true)
    }else setRiderLoading(false)
  },[isRiderLoading])

  const refetch = () => {
    dispatch(getAllRiders())
  };

  return (
    <View style={styles.container}>
      {riderLoading === true ? (
        <View
          style={{
            width: "100%",
            height: 40,
            marginVertical: 20,
          }}
        >
          <ActivityIndicator />
        </View>
      ) : riders && riders.length > 0  ? (
        <FlatList
          style={{
            width: "100%",
            gap: 40,
            flexDirection: "row",
          }}
          contentContainerStyle={{
            gap: 38,
            justifyContent: "space-between",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={riders.slice(0, 4)}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              router.push(`/rider-details/${item.id}`);
            }}>
              <View style={styles.userView}>
                <Image
                  source={{ uri: item.profileImage }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.bikername}>{item.firstName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <TouchableOpacity
          onPress={refetch}
          style={{
            alignItems: "center",
            backgroundColor: COLORS.primary,
            width: 100,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              paddingVertical: 10,
              color: COLORS.white,
              fontFamily: "popReg",
              textAlign: "center",
            }}
          >
            Reload
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecentRiders;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    alignItems: "center",
    gap: 32
  },
  userView: {
    alignItems: "center",
    
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 150,
    backgroundColor: COLORS.appYellow,
    marginBottom: 8,
  },
  bikername: {
    fontFamily: "popReg",
    color: COLORS.textGray,
    fontSize: 14,
  },
});
