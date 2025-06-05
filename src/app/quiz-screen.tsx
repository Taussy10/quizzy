import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import React, { JSX, useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizData } from '../constants/data';
import { router } from 'expo-router';

// Want to learn

const QuizScreen = () => {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [selectOption, setSelectOption] = useState('');
  // For storing all userAnswers
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // const arr = [1, 2, 3, 4, 5];
  // const shuffledArr = fisherYatesShuffle([...quizData]);

  // What do useMemo Hooks does ? on intial render whatever the result(by calculation) was, it stores in cache
  //  then if the component renders again and if dependency value changes then it will show cache result not recalculate

  // If you don't use useMemo hook then will give error of: TypeError: dependencies is not iterable
  const filtered = useMemo(() => {
    const shuffledArr = fisherYatesShuffle([...quizData]);
    // console.log('Helo :', typeof currentQuiz);

    // return shuffledArr.slice(0, 11);
    return shuffledArr.slice(0, 3);
  }, []);

  // const filtered = shuffledArr.slice(1, 11);
  // console.log('Filtered :', filtered.length);

  console.log('SelectOption :', selectOption);

  return (
    // will take care about UI later
    // <SafeAreaView className="flex-1 px-4 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[length:20px_20px]  ">
    <SafeAreaView className="flex-1 px-4 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[length:20px_20px]">
      <Text className="mb-4 mt-6 text-center font-OpenSans-Bold">Quiz</Text>

      {/* Text center so that if the text in two lines then 2nd line text should be start from center not the intial cause this is game not english paragraph */}
      <Text className=" mb-4 text-center font-OpenSans-Bold">{filtered[currentQuiz].question}</Text>

      {/* <Text>{filtered[currentQuiz].answer}</Text> */}

      {filtered[currentQuiz].options.map((item: string, index: number): JSX.Element => {
        // why itmes is string type? cause it's string you can check it
        console.log('options :', item);

        return (
          <View className="  mb-1" key={index}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setSelectOption(item);
                console.log('ItemSelected :', item);
              }}
              // here we need to manage state ?how do you know cause state of className is chainging
              // due to certian thing happening and what's that ? by selecting
              // so create state selectOption
              // when it's happening when you select option?
              // so get the option value and compare with the state
              //  if selectOption == item(selected option) me matches then change the state
              // added but it's not chaing the state ? why cause value in the selectOption is undefined
              // so you need to add in selectOption when you select so go
              // onPress and setSelectOption(item)
              // but it's still not working why? cause in my
              // filterItem I'm  rendering everytime so  new quizzes are getting returned so it mismatches

              className={` ${selectOption === item ? 'bg-gray-900' : 'bg-white'} rounded-2xl bg-green-400 p-4`}>
              <Text className={` ${selectOption === item ? 'text-white' : 'text-black'}`}>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}

      <TouchableOpacity
        onPress={() => {
          const currentQuestion = filtered[currentQuiz];

          setLoading(true);
          // save the userAnswer
          const userAnswerObj = {
            question: currentQuestion.question,
            correctAnswer: currentQuestion.answer,
            // we are stoing userAnswer
            userAnswer: selectOption,
          };

          // const update the answer on each
          const updatedAnswers = [...answers, userAnswerObj];
          setAnswers(updatedAnswers);
          setLoading(false);
          // why do I need to use -1
          // Firstly: filted.length is 10
          // then: we are intial value of currentQuiz =0
          // third: we are comparing that is currentQuiz(0) is less than filtered.length(10)
          // intially: 0 is less than 10 Yeah ? so increase the currentQuiz = 0+1 =1
          // till 9 is less than 10 ? Yeah so it will incrase again and while fetching
          // quiz it will give error let me tell you what will be error ? .question is not exist like that
          // how I know ? cause firstly it will try to fetch question element

          // but the problem is that we only have 9 index element
          // so wee need on 9th element
          // if (currentQuiz < filtered.length) {
          // so by filtred.length - 1 = 10 -1 = 9
          // so if 9 is less than 9 ? naah so it will work false statement
          if (currentQuiz < filtered.length - 1) {
            // not cause 0 is
            // setCurrentQuiz(0+1)
            setCurrentQuiz(currentQuiz + 1);
          } else {
            router.push({
              pathname: '/quiz-summary',
              params: JSON.stringify(updatedAnswers),
            });
          }
        }}
        className="  mb-4  flex-row items-center  justify-center rounded-xl  bg-black p-5">
        {loading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Text className=" w-full  text-center font-OpenSans-Bold   text-white ">NEXT</Text>
        )}
      </TouchableOpacity>

      {/* <Button
        title="NEXT"
        
      /> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default QuizScreen;
