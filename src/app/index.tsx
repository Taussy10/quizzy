import { View, Text, Image, Button, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Index = () => {
  // if (true) {
  //   return <Redirect href={'/quiz-screen'} />

  // }

  // we have data of animals
  const number = [2, 2, 2, 2, 2];
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    number.forEach((element) => {});
    const element = number[i];
    // console.log("I :",i);

    console.log('Elm :', element);

    const sum = num + i;
    console.log('Sum :', sum);
  }

  //  number.forEach(element => {
  //   while (element.length < 6) {
  //     const sum = num + element

  //     console.log(sum);
  //   }

  //  });

  const animalsData = ['Rat', 'Elephant', 'Cat', 'Tiger'];
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        {/* Container for px03 */}
        <View className=" px-4">
          {/* <Button title="Go to quiz screen" onPress={() => router.push('/quiz-screen')} /> */}
          {/* no we will create app using it 
      what kinda app ? an app that will display Animals name
      */}
          {/* {animalsData.map((item, index) => {
            return (
              <View key={index}>
                <Text className="  text-xl font-bold">{item}</Text>
              </View>
            );
          })} */}
          <Text className='font-OpenSans-Bold text-2xl'>Index</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
