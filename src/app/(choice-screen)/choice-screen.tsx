import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

const ChoiceScreen = () => {
  const [input, setInput] = useState('');

  console.log('Input :', input.length);

  return (
    <View className=" mt-16">
      <Text>ChoiceScreen</Text>
      {/* Even though it's text still giving error 
      What's */}
      {/* Question will be asked  */}
      <Text className=" mb-2 mt-16 text-center font-OpenSans-Bold text-[17px]">
        What is your opinion on Money App
      </Text>

      {/* User have to answer in 100 words 

*/}
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={(text) => setInput(text)}
        value={input}
        placeholder="Write your Opinion"
      />
      {/* If word 100 then count then check number of words if more than more than 99
      then ok else show Alert write 23 characters more 
      */}
      <TouchableOpacity
        // to write ifElse(statements) in onPress then you have to
        // give call back function
        onPress={() => {
          if (input.length < 100) {
            Alert.alert('Error', `Write ${100 - input.length} chars more `);
          } else {
            router.push('/choice-result');
          }
        }}
        className=" bg-action w-32 border-2   border-[#0B2131] p-3  px-4   py-1  text-lg text-white ">
        <Text className=" text-center font-OpenSans-SemiBold text-2xl text-white">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChoiceScreen;
