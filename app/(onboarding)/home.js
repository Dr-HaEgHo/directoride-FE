import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRiders } from '../../redux/riders/ridersAction'
import styles from '../../assets/styles/home.styles'
import HomeSearch from '../../components/homeSearch'
import RecentRiders from '../../components/RecentRiders'
import axios from 'axios'
import { baseUrl } from '../../config'
import Slides from '../../components/Slides'
import { getAllSlides } from '../../redux/slides/slidesAction'
import RiderCards from '../../components/RiderCards'

const home = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getAllRiders())
    dispatch(getAllSlides())
  },[])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.headText}>Discover Riders Around You</Text>
          <HomeSearch />
          <RecentRiders />
          <Slides />
          <RiderCards/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default home;