import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';

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
    <SafeAreaView className="flex-1 bg-green-500">
      {/* no we will create app using it 
      what kinda app ? an app that will display Animals name
      */}
      {animalsData.map((item, index) => {
        return (
          <View key={index}>
            <Text className="  text-xl font-bold">{item}</Text>
          </View>
        );
      })}
      {/* <Image source={require('')} /> */}
      <Text>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
