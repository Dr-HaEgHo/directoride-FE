import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Paginator = ({ data, scrollX, setCurrentSlide, refSlide }) => {
    const { width } = useWindowDimensions();
    const router = useRouter()


  const proceedToSignUp = () => {
    router.replace("/signUp")
  };
  const goPrevSlide = () => {
    const prevSlideIndex = scrollX - 1;
    if (scrollX > 0) {
      const offset = prevSlideIndex * width;
      refSlide?.current?.scrollToOffset({ offset });
      setCurrentSlide(prevSlideIndex);
    }
  };
  const goNextSlide = () => {
    const nextSlideIndex = scrollX + 1;
    if (nextSlideIndex !== data.length) {
      const offset = nextSlideIndex * width;
      refSlide?.current?.scrollToOffset({ offset });
      setCurrentSlide(nextSlideIndex);
    }
  };

  return (
    <View
      style={{
        width,
        position: "absolute",
        bottom: 20,
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 20,
        gap: 32,
      }}
    >
      {scrollX === data.length - 1 ? (
        ""
      ) : (
        <View
          style={{
            flexDirection: "row",
            height: 64,
            alignItems: "center",
          }}
        >
          {data?.map((_, i) => {
            return (
              <Animated.View
                style={[styles.dot, { width: scrollX === i ? 20 : 8 }]}
                key={i.toString()}
              />
            );
          })}
        </View>
      )}
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        {scrollX !== data.length - 1 && (
          <AntDesign
            onPress={goPrevSlide}
            style={{
              color: scrollX === 0 ? "#ffffff00" : "white",
              width: 36,
              height: 36,
            }}
            name="arrowleft"
            size={24}
            color="white"
          />
        )}
        {scrollX === data.length - 1 ? (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.appYellow,
              flex: 1,
              alignItems: "center",
              justifyContent: " center",
              borderRadius: 10,
              padding: 20,
            }}
            onPress={proceedToSignUp}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        ) : (
          <AntDesign
            onPress={goNextSlide}
            name="arrowright"
            size={24}
            color="white"
            style={{
              width: 36,
              height: 36,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: COLORS.darkWhite,
  },
});