import { View, Text, ImageBackground, BackHandler } from 'react-native';

import { router } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const SpinResult = () => {
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
          <Text>Choice Screen</Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SpinResult;
