import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const {navigate}=useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button title ="Go user"  onPress={()=>{navigate('user')}}></Button>
      <Text></Text>
      <Button title ="Go To Do"  onPress={()=>{navigate('todo')}}></Button>
    </View>
  )
}