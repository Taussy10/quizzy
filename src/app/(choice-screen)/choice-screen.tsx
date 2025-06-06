import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChoiceScreen = () => {
  const [input, setInput] = useState('');
  const [inputHeight, setInputHeight] = useState(0);

  // Cause I don't want to include empty spaces
  const trimmedInput = input.trim()
  return (
    // <View className=" mt-16">

    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  px-4  ">
          {/* Container for screen */}

          <Text>ChoiceScreen</Text>

          {/* Even though it's text still giving error 
      What's */}
          {/* Question will be asked  */}
          <Text className=" mb-2 mt-16 text-center font-OpenSans-Bold text-[17px]">
            What is your opinion on Money App ?
          </Text>

          {/* User have to answer in 100 words
           */}

          <TextInput
            className=" mb-6   rounded-2xl    border-2 bg-white font-OpenSans-SemiBold  text-gray-700"
            style={{ height: Math.max(100, inputHeight) }}
            multiline={true}
            // if you add multiLine true then you get enter option
            numberOfLines={3}
            // placeholder="What do you want to create? Add ingredients etc."
            placeholder="Write your Opinion"
            textAlignVertical="top"
            // this for increasing size of input
            onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
            // when user change the userInput in TextInput it will
            // store in setInput function then useState
            onChangeText={(text) => setInput(text)}
            // why do we use value ? so that can store value of userInput in InputText
            value={input}
          />
          {/* If word 100 then count then check number of words if more than more than 99
      then ok else show Alert write 23 characters more 
      */}


          <TouchableOpacity
            // to write ifElse(statements) in onPress then you have to
            // give call back function
            onPress={() => {
              if (trimmedInput.length < 100) {
                Alert.alert('Error', `Write ${100 - trimmedInput.length} chars more `);
              } else {
                router.push('/choice-result');
              }
            }}
            className=" bg-action  w-full rounded-xl border-2 p-4 ">
            <Text className=" text-center font-OpenSans-SemiBold text-2xl text-white">Submit</Text>
          </TouchableOpacity>
          {/* </View> */}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ChoiceScreen;
