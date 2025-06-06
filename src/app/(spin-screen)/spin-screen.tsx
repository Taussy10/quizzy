import {
  View,
  Image,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

const SpinScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    // if spining is truthy then return it
    // But it's wrong? Actually naah cause we wanna check does
    // the spining in the progress ? if true then stop it
    // basically we want to stop unnecsary spining
    // in short if already spining then stop it
    if (spinning) return;
    // then setSpining(true)
    setSpinning(true);

    const randomTurns = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
    console.log('TRUN :', randomTurns);

    Animated.timing(spinValue, {
      toValue: randomTurns * 360,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start(() => {
      setSpinning(false);
      spinValue.setValue(0); // Reset if needed
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        {/* For making sure that nodges don't distrub our app */}
        <SafeAreaView className="flex-1  px-4  ">
          <Text>Spin to win</Text>

          <Animated.Image
            source={require('~/assets/images/Spin-wheel.png')} // use your image
            style={{
              width: 300,
              height: 300,
              transform: [{ rotate: spin }],
            }}
          />
          <Image
            source={require('~/assets/images/knob.png')}
            className="  absolute size-16  "
            style={{
              top: 290,
              right: 180,
            }}
          />

          <TouchableOpacity
            className="mt-10 rounded-full bg-yellow-400 px-6 py-3"
            onPress={spinWheel}
            disabled={spinning}>
            <Text className="text-lg font-bold text-black">
              {spinning ? 'Spinning...' : 'Spin Now'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SpinScreen;
