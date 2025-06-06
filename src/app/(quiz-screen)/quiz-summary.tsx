import { View, Text, FlatList, Button, BackHandler, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

// In this screen add router.replace('Home') so that you can't back to quiz
const QuizSummary = () => {
  const data = useLocalSearchParams();
  // we are getting data in string indexes
  // console.log('Data :', data);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      router.replace('/'); // 👈 This sends user to index screen
      return true; // 👈 STOPS the default back behavior so instead going to previous screen router.replace will occur
    });

    return () => backHandler.remove(); // Clean up on unmount
  }, []);

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
    <SafeAreaView className=" flex-1 ">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        {/* Container for px03 */}

        <View className=" flex-1 px-4">
          <Text>
            Your Score is : {totalCorrectAnswwer.length}/{parsedData.length}
          </Text>
{/* 
          <FlatList
            data={parsedData}
            showsVerticalScrollIndicator={false}
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
          /> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QuizSummary;
