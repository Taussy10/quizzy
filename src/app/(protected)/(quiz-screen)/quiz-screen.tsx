import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import { JSX, useState, useMemo, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { quizData } from '~/src/constants/data';

// Want to learn

const QuizScreen = () => {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [selectOption, setSelectOption] = useState('');
  // For storing all userAnswers
  const [answers, setAnswers] = useState<any[]>([]);
  
  // Counter
  const [counter, setCounter] = useState(5);

  // interval
  useEffect(() => {
    const timer = setInterval(() => {
      // if counter is greater then 1 then keep counting -1
      if (counter > 1) {
        setCounter((prev) => prev - 1);
      } else {
        // Save answer (even if not selected)
        const currentQuestion = filtered[currentQuiz];
        const userAnswerObj = {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.answer,
          userAnswer: selectOption || 'Not Answered',
        };

        const updatedAnswers = [...answers, userAnswerObj];
        setAnswers(updatedAnswers);

        if (currentQuiz < filtered.length - 1) {
          setCurrentQuiz((prev) => prev + 1);
          setSelectOption('');
          setCounter(5); // Reset timer for next quiz
        } else {
          clearInterval(timer); // Stop timer
          router.push({
            pathname: '/quiz-result',
            params: JSON.stringify(updatedAnswers),
          });
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on unmount or re-render
  }, [counter, currentQuiz]);

  // console.log('FALSE :', Boolean(selectOption));

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

    // return shuffledArr.slice(0, 11);
    return shuffledArr.slice(0, 3);
  }, []);

  return (
    // will take care about UI later

    // This is just for above nodges and bottom nodges
    <SafeAreaView className="flex-1 ">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        {/* Container for px-3 */}
        <View className=" flex-1 px-4 ">
          <View className=" absolute right-4 top-2 size-8 flex-row items-center justify-center rounded-full bg-red-500 ">
            <Text className="text-center font-OpenSans-Bold text-xl text-white">{counter}</Text>
          </View>
          {/* Text center so that if the text in two lines then 2nd line text should be start from center not the intial cause this is game not english paragraph */}

          {/* For making center both timer and question */}
          <View className=" mb-3 items-center">
            <Text className=" mb-2 mt-16 text-center font-OpenSans-Bold text-[17px]">
              {filtered[currentQuiz].question}
            </Text>

            {/* <View className=' size-14 rounded-full justify-center items-center bg-red-500'>
          <Text className="text-center text-2xl text-white font-OpenSans-Bold">{counter}</Text>
            </View> */}
          </View>

          {/* <Text>{filtered[currentQuiz].answer}</Text> */}

          {filtered[currentQuiz].options.map((item: string, index: number): JSX.Element => {
            // why itmes is string type? cause it's string you can check it
            // console.log('options :', item);

            return (
              <View className="  mb-1" key={index}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setSelectOption(item);
                    // console.log('ItemSelected :', item);
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

                  className={` ${selectOption === item ? ' bg-action' : 'border-black '} mb-2  rounded-2xl border-2 p-4`}>
                  <Text
                    className={` ${selectOption === item ? 'text-white' : 'text-black'}   font-OpenSans-SemiBold  text-base`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

          {/* <TouchableOpacity
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
            className="  mb-4  h-14 flex-row  items-center justify-center rounded-xl   bg-blue-500 p-2"
            style={{
              position: 'absolute',
              bottom: 300,
              right: 20,
            }}>
            {loading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text className=" w-full text-center  font-OpenSans-Bold text-2xl   text-white ">
                NEXT QUIZ
              </Text>
            )}
          </TouchableOpacity> */}

          {/* <Button
        title="NEXT"
        
      /> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QuizScreen;
