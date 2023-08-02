import React, { useRef, useState } from 'react'
import { Animated, FlatList, Image, Text, View, useWindowDimensions } from 'react-native'
import { useRouter } from 'expo-router';
import styles from '../../components/onboardScreens/onboarding.style';
import OnboardingItem from '../../components/onboardScreens/onboardingItem';
import { onSlides } from '../../constants/slides'
import Paginator from '../../components/Paginator';

 
const OnboardingScreen = () => { 

  const refSlide = useRef(null)

  const {width } = useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current
  const router = useRouter()
  const slidesRef = useRef(null) 

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  })

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
  
  const updateCurrentSlideIndex = e => {
    const contentOffsetOfX = e.nativeEvent.contentOffset.x;
    const currentSlideIndex = Math.round(contentOffsetOfX / width)
    setCurrentSlide(currentSlideIndex);
  }
 


  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={onSlides}
          horizontal
          pagingEnabled
          bounces={false}
          ref={refSlide}
          renderItem={(item) => <OnboardingItem item={item} />}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        />
      </View>

      <Text
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        Skip
      </Text>
      <Paginator data={onSlides} scrollX={currentSlide} refSlide={refSlide} setCurrentSlide={setCurrentSlide} />
    </View>
  );
}

export default OnboardingScreen; 