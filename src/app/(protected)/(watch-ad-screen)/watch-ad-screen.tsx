import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const WatchAdScreen = () => {
  return (
    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  px-4  ">
          {/* Container for screen */}
          <Text>Watch Ad Screen</Text>
          <Button 
          title='Movie'
          onPress={() => router.push('/watch-ad-result')}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WatchAdScreen;
