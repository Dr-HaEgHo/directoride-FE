import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "onboarding",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    popBlack: require("../assets/fonts/Poppins-Black.ttf"),
    popBold: require("../assets/fonts/Poppins-Bold.ttf"),
    popEBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    popSBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    popMid: require("../assets/fonts/Poppins-Medium.ttf"),
    popReg: require("../assets/fonts/Poppins-Regular.ttf"),
    popLight: require("../assets/fonts/Poppins-Light.ttf"),
    popELight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    popThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // const [isAppFirstLaunched, setIsAppFirstLauncher] = useState(null);

  return (
    <TailwindProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <Stack onLayout={onLayoutRootView}>
            <Stack.Screen
              name="(onboarding)"
              options={{ headerShown: false }}
            />
          </Stack>
        </PersistGate>
      </Provider>
    </TailwindProvider>
  );
};

export default Layout;
