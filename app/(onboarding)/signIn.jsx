import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/styles/signin.styles'
import Input from '../../components/Input';
import { useRouter } from 'expo-router';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { COLORS } from '../../constants';
import { useDispatch } from 'react-redux';
import { getAllRiders } from '../../redux/riders/ridersAction';

const signIn = () => {

      const router = useRouter();
      const [visible, setVisible] = useState(false);
      const dispatch = useDispatch()

      const toggleVisible = () => {
        setVisible(!visible);
      };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          {/* HEADER TXT */}
          <Text style={styles.headTxt}>Welcome back!</Text>
          <Text style={styles.subTxt}>Sign in to continue</Text>

          {/* form View */}
          <View style={styles.viewForm}>
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
            <TouchableOpacity
              onPress={() => {
                router.replace("/home");
                dispatch(getAllRiders())
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>

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
              <Text style={styles.callQuestion}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => {router.replace('/signUp')}}  >
                <Text style={styles.callAction}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default signIn