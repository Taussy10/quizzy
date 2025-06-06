import { Stack } from 'expo-router';

export default function SpinLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="choice-screen" />
      <Stack.Screen name="choice-result" />
    </Stack>
  );
}
