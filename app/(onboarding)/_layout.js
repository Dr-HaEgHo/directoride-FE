import { Tabs } from "expo-router"

export default () => {

    return (
        <Tabs>
            <Tabs.Screen name="onboarding" options={{ headerShown: false, tabBarStyle:{display:"none"} }} />
            <Tabs.Screen name="signUp" options={{ headerShown: false, tabBarStyle:{display:"none"} }} />
            <Tabs.Screen name="signIn" options={{ headerShown: false, tabBarStyle:{display:"none"} }} />
            <Tabs.Screen name="home" options={{ headerShown: false, tabBarStyle:{display:"none"} }} />
            <Tabs.Screen name="rider-details/[id]" options={{ headerShown: false, tabBarStyle:{display:"none"} }} />
        </Tabs>
    )
}