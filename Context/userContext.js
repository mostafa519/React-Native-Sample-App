 
import React, { createContext, useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';

export const usersContext=createContext();

const UsersContextProvider = ({children}) => {
    
    const [users,setUsers]=useState([])
    useEffect(()=>{ 
        fetch("http://jsonplaceholder.typicode.com/users").then((res)=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
       <usersContext.Provider value={{users}} >
            {children}
        </usersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UsersContextProvider;
