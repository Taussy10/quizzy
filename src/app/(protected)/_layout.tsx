import { Slot, Stack } from 'expo-router';

export default function ProtectedLayout() {
  return (
    // <Stack screenOptions={{ headerShown: false }}>
    //   {/* hard to belive but have to
    //   do this will move to initial screen which is home  */}
    //   {/* <Stack.Screen name="(tabs)"/> */}
    //   {/* Will write her if needed  */}

    // </Stack>
    <Slot />
  );
}
