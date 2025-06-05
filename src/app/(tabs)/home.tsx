import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    // For some reason putting the ImageBackground below the safeareva view doesn't work
    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  px-4  ">
          {/* Container for screen */}
          <Text>Home screen</Text>

          {/* <TouchableOpacity 
          className=" w-32 border-2 border-[#0B2131]   bg-[#4884FF] p-3  px-4   py-1  text-lg text-white "
          >
            <Text className=" text-center font-OpenSans-SemiBold text-2xl text-white">Hello</Text>
          </TouchableOpacity> */}

          <View className=" flex-row gap-5">
            <View className="  h-60 w-40 rounded-xl border-2 border-[#0B2131]   bg-[#4884FF] p-3  px-4   py-1  text-lg text-white ">
              <Text className=" text-center font-OpenSans-Bold text-2xl  text-white">
                Play the quiz
              </Text>
              <Image source={require('~/assets/thinkin-2.png')} className="  h-24 w-full" />
              <Text className=" text-center font-OpenSans-Bold text-2xl text-white">
                Earn Money
              </Text>
            </View>

            <View className="  h-60 w-40 rounded-md border-2 border-[#0B2131]   bg-[#4884FF] p-3  px-4   py-1  text-lg text-white "></View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Home;
