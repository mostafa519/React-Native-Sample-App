import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native'; 
import { usersContext } from '../Context/userContext';

const Details = () => {
    const {users}=useContext(usersContext)
    const {params}=useRoute();
    const [user,setUser]=useState();  
    useEffect(()=>{
        users.map((obj)=>obj.id===params?setUser(obj):obj)
    },[])
if (!user) return<Text>Loading....To user</Text>
    return (
        <View>
            <Text>{user.name}
            </Text>
        </View>
    );
}
 

export default Details;
