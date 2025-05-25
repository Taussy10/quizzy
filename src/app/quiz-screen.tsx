import { View, Text, Button, Alert } from 'react-native';
import React, { JSX, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizData } from '../constants/data';

const QuizScreen = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);

  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // const arr = [1, 2, 3, 4, 5];
  const shuffledArr = fisherYatesShuffle([...quizData]);

  const filtered = shuffledArr.slice(1, 11);
  console.log('Filtered :', filtered.length);

  return (
    // will take care about UI later
    <SafeAreaView className="flex-1">
      <Text className="font-OpenSans-Bold text-center">Quizzes</Text>

      <Text>{filtered[currentQuiz].question}</Text>
      <Text>{filtered[currentQuiz].answer}</Text>

      {filtered[currentQuiz].options.map((item: string, index: number): JSX.Element => {
        // why itmes is string type? cause it's string you can check it
        // console.log('options :', typeof item);

        return (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        );
      })}

      <Button
        title="NEXT"
        onPress={() => {
          // why do I need to use -1
          // look by default currentQuiz is 0 till it reaches 10
          // filted.length is 10
          if (currentQuiz < filtered.length - 1) {
            // not cause 0 is
            // setCurrentQuiz(0+1)
            setCurrentQuiz(currentQuiz + 1);
          } else {
            Alert.alert('Error', 'Ho gaya bhai jaa ke kaam kar kuchh aur ');
          }
        }}
      />
    </SafeAreaView>
  );
};

export default QuizScreen;
