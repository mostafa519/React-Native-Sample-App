





 
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

export default function Photos() {
 
  return (
    <SafeAreaView style={styless.con}>
   <ScrollView horizontal>
<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/yasoka.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/yasoka.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/yasoka.jpg")}
  style={{ margin: 10 }}
></Image>
</ScrollView>
<ScrollView>
<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/yasoka.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={require("../assets/images/yasoka.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/record-of-ragnok.jpg")}
  style={{ margin: 10 }}
></Image>
<Image
  source={require("../assets/images/Saikik.jpg")}
  style={{ margin: 10 }}
></Image>

<Image
  source={{
    uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  }}
  style={{ width: 340, height: 200, margin: 10 }}
/>
<Image
  source={{
    uri: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
  }}
  style={{ width: 340, height: 200, margin: 10 }}
/>
<Image
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC1F66EwirdF6kpYfY7zb292dTYqeLjzLww&usqp=CAU",
  }}
  style={{ width: 340, height: 200, margin: 10 }}
/>
<Image
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU",
  }}
  style={{ width: 340, height: 200, margin: 10 }}
/>
<Image
  source={{
uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU"          }}
  style={{ width: 340, height: 200, margin: 10 }}
/>
</ScrollView> 
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
      