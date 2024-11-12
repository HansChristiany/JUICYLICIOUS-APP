import {  Text, View } from 'react-native'
import React from 'react'
import { Stack, SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font'
import {useEffect} from 'react'


SplashScreen.preventAutoHideAsync();
const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Moderustic-Bold": require("../assets/fonts/Moderustic-Bold.ttf"),
    "Moderustic-ExtraBold": require("../assets/fonts/Moderustic-ExtraBold.ttf"),
    "Moderustic-Light": require("../assets/fonts/Moderustic-Light.ttf"),
    "Moderustic-Medium": require("../assets/fonts/Moderustic-Medium.ttf"),
    "Moderustic-Regular": require("../assets/fonts/Moderustic-Regular.ttf"),
    "Moderustic-SemiBold": require("../assets/fonts/Moderustic-SemiBold.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  




  return (
   <Stack>
    <Stack.Screen
     name="index"
     optoions={{headerShown: false

     }}
     />
   </Stack>



    // <>
    // header
    // <Slot></Slot>
    // footer 
    // </>
  )
}

export default MainLayout

