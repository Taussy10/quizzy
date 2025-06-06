import { StyleSheet, Text, View, ImageBackground, BackHandler } from 'react-native'
import {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';

const WatchAdResult = () => {
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        router.replace('/home'); // 👈 This sends user to index screen
        return true; // 👈 STOPS the default back behavior so instead going to previous screen router.replace will occur
      });
  
      return () => backHandler.remove(); // Clean up on unmount
    }, []);
  
  return (
    <View className=" flex-1">
         <ImageBackground
           source={require('~/assets/dot-dot-bg.png')}
           resizeMode="repeat"
           style={{ flex: 1 }}>
           <SafeAreaView className="flex-1  px-4  ">
             {/* Container for screen */}
      <Text>AdResult</Text>
      </SafeAreaView>
       </ImageBackground>

    </View>
  )
}

export default WatchAdResult
