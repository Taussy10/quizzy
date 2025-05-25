import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect } from 'expo-router'

const Index = () => {
  if (true) {
    return <Redirect href={'/quiz-screen'} />
    
  }
  return (
    <SafeAreaView
    className='flex-1 bg-green-500'
    >
      {/* <Image source={require('')} /> */}
      <Text>Index</Text>
    </SafeAreaView>
  )
}

export default Index