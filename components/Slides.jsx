import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../constants";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const Slides = () => {
  const refSlide = useRef(null);
  const { width } = useWindowDimensions();

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = useSelector((state) => state.slides.slidesList);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetOfX = e.nativeEvent.contentOffset.x;
    const currentSlideIndex = Math.round(contentOffsetOfX / width);
    setCurrentSlide(currentSlideIndex);
  };

  console.log("slides", heroSlides);

  return (
    <View style={a.container}>
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={heroSlides}
          horizontal
          pagingEnabled
          bounces={false}
          ref={refSlide}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.image }}
              style={a.image}
              width={width - 40}
            />
          )}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        />
      </View>

      <View style={a.arrows} >
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/leftArrow.png")}
            width={24}
            height={24}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/rightArrow.png")}
            width={24}
            height={24}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* <Paginator
        data={onSlides}
        scrollX={currentSlide}
        refSlide={refSlide}
        setCurrentSlide={setCurrentSlide}
      /> */}
    </View>
  );
};

export default Slides;

const a = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 155,
    backgroundColor: COLORS.blackTen,
    borderRadius: 10,
    marginTop: 26,
    overflow: "hidden",
  },
  image: {
    height: 155,
    maxWidth: "100%",
    },
    arrows: {
        width: "100%",
        position: "absolute",
        zIndex: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        top: "50%",
  }
});
