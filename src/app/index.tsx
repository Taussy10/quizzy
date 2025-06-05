import { View, Text, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';

const Index = () => {

  if (true) {
    return <Redirect href={'/home'} />
  }

//      const interval = setInterval(() => {
//    console.log("Hello");
   
//   },1000)
// clearTimeout(interval)

  // we have data of animals
  const number = [2, 2, 2, 2, 2];
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    number.forEach((element) => {});
    const element = number[i];
    // console.log("I :",i);

    // console.log('Elm :', element);

    const sum = num + i;
    // console.log('Sum :', sum);
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
            <TouchableOpacity
                  className="ml-auto md:ml-0 text-lg md:text-xl lg:text-2xl text-white bg-[#4884FF] font-medium px-4 md:px-6 lg:px-8 py-1 md:py-1.5 lg:py-2 border-2 border-[#0B2131] hidden md:block hover:bg-[#366fd1] transition-colors duration-200"
                  // className=' bg-green-400'
          
                  >
                      <Text className=' text-2xl'>Hello</Text>
                  </TouchableOpacity>
          <Button title="Go to quiz screen" onPress={() => router.push('/home')} />
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
