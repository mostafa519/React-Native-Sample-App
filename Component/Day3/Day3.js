import React from "react";
import styles from "../styles/styles";
import {
  Image,
  View,
  SafeAreaView,
  SectionList,
  Text, 
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Routting() {
  const sections = [
    
    {
      id: "2",
      name: "A",
      data: [
        { image: require("../../assets/images/yasoka.jpg") ,
        title: "ahmed" },
        { image: require("../../assets/images/yasoka.jpg") ,
        title: "mahmoud" },
        { image: require("../../assets/images/yasoka.jpg") ,
        title: "marwa" },
      ],
    },
    {
      id: "3",
      name: "B",
      data: [
        { image: require("../../assets/images/Saikik.jpg") ,
        title: "alaa" },
        { image: require("../../assets/images/Saikik.jpg") ,
        title: "saad" },
        { image: require("../../assets/images/Saikik.jpg") ,
        title: "sayed" },
        { image: require("../../assets/images/Saikik.jpg") ,
        title: "samira" },
      ],
    },
    {
      id: "4",
      name: "C",
      data: [
        { image: require("../../assets/images/yasoka.jpg") ,
         title: "mostafa" },
        { image: require("../../assets/images/yasoka.jpg") ,
         title: "rada" },
        { image: require("../../assets/images/yasoka.jpg") ,
         title: "mareim" },
        { image: require("../../assets/images/yasoka.jpg") ,
         title: "arwa" },
      ],
    },
  ];
  const {navigate}=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <SectionList
        sections={sections}
        style={{
          flexDirection: "row",
          textAlign: "left",
          fontSize: 15,
          backgroundColor: "transparent",
          marginTop: 15,
          marginBottom: 15,
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.addxt}>{section.name}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Pressable
          onPress={()=>{navigate('details2',item)}}>
          <View 
            style={{
              flexDirection: "row",
              textAlign: "left",
              backgroundColor: "transparent",
              padding:20,
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 ,paddingLeft:15 ,paddingRight:15 }}
              source={item.image}
            ></Image>
            {/* <Text style={{paddingLeft:15 ,paddingTop:15 ,fontSize:28}}>{item.title}</Text> */}
         
               <Text style={{paddingLeft:15 ,paddingTop:15 ,fontSize:28}}>{item.title}</Text>
            
          </View>
          </Pressable>
        )}
      >
       
      </SectionList>
      <Button title="navigator" onPress={()=>{navigate('home')}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
