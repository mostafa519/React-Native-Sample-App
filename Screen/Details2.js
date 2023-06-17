import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Details2() {
  const { params } = useRoute();
  return (
    <View style={styles.main}>
      <View style={styles.singleUser}>
        <Image style={styles.singleUserImage} source={params.image}></Image>
        <View style={styles.addtxt}>
           
          <Text style={styles.dText}>{params.title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  singleUserImage: {
    width: "100%",
    height: "100%",
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 50,
    paddingTop: 50,
  },
  main: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",

    alignItems: "center",
  },
  singleUser: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "complementaryColor",
    borderRadius: 10,
  },
  dText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    
  },
  addtxt:{
    backgroundColor: "gray",
    width: 200,
    height: 50, 
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    
  }
});
