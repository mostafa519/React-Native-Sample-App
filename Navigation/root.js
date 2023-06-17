import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../Screen/Home';
import Users from '../Screen/Users';
import Details from '../Screen/Details';
import Routting from '../Component/Day3/Day3';
import ToDoList from '../Component/toDolist/ToDoList';
import Details2 from '../Screen/Details2';


const stack =createNativeStackNavigator();
export default function Root() {
  return (
     <stack.Navigator>
        <stack.Screen name='route' component={Routting}></stack.Screen>
        <stack.Screen name='home' component={Home}></stack.Screen>
     <stack.Screen name='user' component={Users}></stack.Screen> 
     <stack.Screen name='details' component={Details}></stack.Screen>
     <stack.Screen name='details2' component={Details2}></stack.Screen>
     <stack.Screen name='todo' component={ToDoList}></stack.Screen>
     </stack.Navigator>
  )
}
