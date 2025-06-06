import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cards } from '~/src/constants/card';
import { router } from 'expo-router';

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

          {/* Top bar navigation container */}
          <View className=" mb-10 flex-row gap-2">
            <Image
              source={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png' }}
              className="  size-14 rounded-full"
            />
            {/* Container for texts */}
            <View className=" ">
              <Text className="   font-semibold   text-gray-700">Welcome !</Text>
              <Text className="text-action font-OpenSans-Bold text-lg ">Tausif</Text>
            </View>
          </View>

          <FlatList
            data={cards}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <View key={index} className=" mb-5 mr-12">
                  <TouchableOpacity
                    onPress={() => router.push(item.moveTo)}
                    className="  h-60 w-40 rounded-xl border-2 border-[#0B2131]    
               p-3  px-4   py-1  text-lg text-white ">
                    <Image
                      source={item.image}
                      className="absolute h-[206px] w-[136px] rounded-lg "
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Home;
