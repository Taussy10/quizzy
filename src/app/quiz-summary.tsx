import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const QuizSummary = () => {
  const data = useLocalSearchParams();

  // we are data in string indexes
  // console.log('Data :', data);

  let reconstructed = '';
  const keys = Object.keys(data).sort((a, b) => Number(a) - Number(b));

  for (const key of keys) {
    reconstructed += data[key];
  }

  console.log(reconstructed); // prints the full JSON string
  const parsedData = JSON.parse(reconstructed); // if valid JSON
  // console.log('parsedData from quiz-summary :', parsedData);

  const totalCorrectAnswwer = parsedData.filter(
    (item: string) =>
      // it filters out where the userAnswer === correctAnswer and that will be stored in h
      item.userAnswer === item.correctAnswer
  );

  return (
    <SafeAreaView className=" px-4">
      <Text>
        Total Correct Answers Are: {totalCorrectAnswwer.length}/{parsedData.length}
      </Text>

      <FlatList
        data={parsedData}
        renderItem={({ item, index }) => {
          return (
            <View className="">
              <View className=" mb-6 rounded-xl bg-blue-400 p-2">
                <Text className=" font-OpenSans-SemiBold ">Question: {item.question}</Text>
                <Text
                  className={`  font-OpenSans-Bold ${item.userAnswer === item.correctAnswer ? ' text-green-700' : 'text-red-700'} `}>
                  Your Answer: {item.userAnswer}
                </Text>
                <Text className="font-OpenSans-Bold text-green-700">
                  <Text className=" text-black ">Correct Answer :</Text> {item.correctAnswer}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default QuizSummary;
