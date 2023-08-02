import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { a } from '../../../assets/styles/rider-details.styles';
import { ArrowLeft, Heart } from 'iconsax-react-native';

const riderDetails = () => {

  const params = useSearchParams()
  const router = useRouter()
  const { width } = useWindowDimensions()
  
  const [riderLoading, setRiderLoading] = useState(false)
  const [rider, setRider] = useState({})
  const [isLiked, setIsLiked] = useState(false)


  const allRiders = useSelector(state => state.riders.ridersList)

  useEffect(() => { 
    // setRider(allRiders.filter((item) => {
    //   if (item.id == params.id) {
    //     return item
    //   }
    // }))

    allRiders.filter((item) => {
      if (item.id == params.id) {
        setRider(item)
      }
    });

    console.log("rider", rider)
  }, [])

  useEffect(() => { 
    if (rider) {
      setRiderLoading(false)
    }else setRiderLoading(true)
  },[rider])
    
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={a.absoluteContainer}>
        <Image source={require("../../../assets/images/rider-bg.jpg")} width />
      </View>

      <View style={a.container}>
        <View style={a.backLove}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <ArrowLeft color="#fff" size="24" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsLiked((prevLiked) => !prevLiked);
            }}
          >
            {isLiked === true ? (
              <Heart size="24" color="#fff" variant="Bold" />
            ) : (
              <Heart size="24" color="#fff" />
            )}
          </TouchableOpacity>
        </View>

        <View style={[a.blurSection, { width }]}>
          <View style={a.nameRating}>
            <Text style={a.name}>Adegoke Philips</Text>
            <View style={a.rating}>
              <Text style={a.number}>4.5</Text>
              <Text style={a.star}>⭐</Text>
            </View>
          </View>
          <View style={a.locationView}>
            <Text style={a.location}>Mayfair, Ile-ife</Text>
          </View>


          <View style={a.tabs}>

            <TouchableOpacity style={a.tab}>
              <Text>Description</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={a.tab}>
              <Text>Reviews</Text>
            </TouchableOpacity>

          </View>


        </View>
      </View>
    </View>
  );
}

export default riderDetails;