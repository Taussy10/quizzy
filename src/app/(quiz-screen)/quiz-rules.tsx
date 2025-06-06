import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const QuizRules = () => {
  return (
    <View>
      <Text>QuizRules</Text>
      <Button 
      title='Move to quiz screen'
      onPress={() => router.push('/quiz-screen')}
      />
    </View>
  )
}

export default QuizRules

