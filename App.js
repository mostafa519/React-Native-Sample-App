 
import { useCallback, useState } from "react";
import { Pressable } from "react-native";
// import {Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native-web';
import {
  Alert,
  Button,
  Image, 
  SafeAreaView, 
  StyleSheet, Text,
  TextInput,
  TouchableNativeFeedbackBase, 
} from "react-native"; 
import ToDoList from "./Component/toDolist/ToDoList";  
import MyColorApp from"./Component/myColors/myColorApp";
import Photos from "./Component/Day1";
import Routting from "./Component/Day3/Day3";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/root";
import UsersContextProvider from "./Context/userContext";
export default function App() {
 
  return (

    <NavigationContainer>
      <UsersContextProvider>
      <Root></Root>
      </UsersContextProvider>
    </NavigationContainer>
    // <SafeAreaView style={styless.con}>
    //   <ToDoList></ToDoList>
    //   </SafeAreaView> 
//       {/* <Routting></Routting> */}
//  {/* <MyColorApp></MyColorApp> */}
//  {/* <Photos></Photos> */}
  
  );
}

const styless = StyleSheet.create({
  con: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    opacity:1,
    height: "100%", 
    color:"white",
    paddingTop: 20,
    fontStyle:"italic"
    
  },
});
