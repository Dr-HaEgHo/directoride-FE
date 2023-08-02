import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/signup.styles";
import Input from "../../components/Input";
import { Eye, EyeSlash } from "iconsax-react-native";
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllRiders } from "../../redux/riders/ridersAction";

const signUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [riderGotten, setRiderGotten] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  // const isRiderGotten = useSelector((state) => state.riders.riderGotten);
  // const isLoading = useSelector((state) => state.riders.ridersLoading);

  // useEffect(() => {
  //   if (isRiderGotten === true) {
  //     router.push("/home");
  //   } else setRiderGotten(false);
  // }, [isRiderGotten]);

  // useEffect(() => {
  //   if (isLoading === true) {
  //     router.push("/home");
  //   } else setRiderGotten(false);
  // }, [isLoading]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          {/* HEADER TXT */}
          <Text style={styles.headTxt}>Sign Up</Text>

          {/* form View */}
          <View style={styles.viewForm}>
            <Input
              label="Name"
              type="email"
              placeholder="Enter Your Full Name"
            />
            <Input label="Email" type="email" placeholder="Enter Your Email" />
            <Input
              label="Password"
              type="password"
              password
              visible={visible}
              iconName={
                visible === true ? (
                  <EyeSlash
                    onPress={toggleVisible}
                    style={{
                      position: "absolute",
                      color: COLORS.textGrayLight,
                      top: "50%",
                      right: 10,
                      transform: [{ translateY: -15 }],
                      zIndex: 1,
                    }}
                    size="28"
                  />
                ) : (
                  <Eye
                    onPress={toggleVisible}
                    style={{
                      position: "absolute",
                      color: COLORS.textGrayLight,
                      top: "50%",
                      right: 10,
                      transform: [{ translateY: -15 }],
                      zIndex: 1,
                    }}
                    size="28"
                  />
                )
              }
              placeholder="Enter Your Password"
            />
            {loading === true ? (
              <View style={{
                width: "100%",
                height: 40,
                marginVertical: 20
              }} >
                <ActivityIndicator />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/home')
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            )}

            <View style={styles.divider}>
              <View style={styles.dash}></View>
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dash}></View>
            </View>

            <View style={styles.signInOptions}>
              <Image
                style={styles.signInOptionsImage}
                source={require("../../assets/icons/Facebook.png")}
                resizeMode="contain"
              />
              <Image
                style={styles.signInOptionsImage}
                source={require("../../assets/icons/twitter.png")}
                resizeMode="contain"
              />
              <Image
                style={styles.signInOptionsImage}
                source={require("../../assets/icons/google.png")}
                resizeMode="contain"
              />
            </View>

            <View style={styles.callToAction}>
              <Text style={styles.callQuestion}>Already a user?</Text>
              <TouchableOpacity
                onPress={() => {
                  router.replace("/signIn");
                }}
              >
                <Text style={styles.callAction}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
