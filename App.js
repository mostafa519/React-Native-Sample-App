 
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
export default function App() {
 
  return (
    <SafeAreaView style={styless.con}>
      <ToDoList></ToDoList> 
 <MyColorApp></MyColorApp>
 <Photos></Photos>
    </SafeAreaView>
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
