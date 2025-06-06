import { Stack } from "expo-router";

export default function SpinLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="spin-screen" />
      <Stack.Screen name="spin-result" />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
}
