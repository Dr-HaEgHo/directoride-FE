import { Redirect, Stack, useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { useEffect, useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { HomeScreen, OnboardingScreen } from "../screens";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState(false);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const appData = AsyncStorage.getItem("isAppFirstLaunched");
    console.log(appData)
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", 'false');
    } else {
      setIsAppFirstLaunched(true)
    }
   }, [])

  useEffect(() => {
    // if (!newUser) router.push('/home')
  }, []); 
 
  return (
    <>
      {isAppFirstLaunched === null ? (
        <Redirect href="/onboarding" />
      ) : isAuth === true ? (<Redirect href="/home" />) : (
        <Redirect href="/signUp" />
      )}
    </>
  );
};

export default Home;