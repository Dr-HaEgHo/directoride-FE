import { View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";
import styles from "./onboarding.style";

const OnboardingItem = ({item}, image) => {
  
  const { width, height } = useWindowDimensions();
  
  return (
    

      <View
        style={[
          styles.containerItem,
          { width, height},
        ]}
      >
        <Image
          source={item.item.image}
          style={[styles.imageItem, { width}]}
          resizeMode="contain"
        />
        <View style={styles.absoluteView}>
          <Text style={styles.titleTextLight} >{
            item.item.title.split(' ')[0]
          }</Text> 
          <Text style={styles.titleText} >{ item.item.title.split(' ').splice(1).join(" ") }</Text> 
          <Text style={styles.descText} >{item.item.description}</Text> 
          {item.item.description2 && (<Text style={styles.descText} >{ item.item.description }</Text> )}
        </View>
      </View>
    );
};

export default OnboardingItem;
