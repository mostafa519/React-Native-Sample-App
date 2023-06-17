import { View, Text,Button, SafeAreaView ,TextInput} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';   
import { usersContext } from '../Context/userContext';

export default function Users() {  
  const [search ,setSearch]=useState('');
  const [filteruser,setFilterUsers]=useState([]);
  const {users}= useContext(usersContext);
  const {navigate}=useNavigation();
     

  useEffect(() => {
    const filtered = users.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    if (search === '') {
      return setFilterUsers(users);
    }

    setFilterUsers(filtered);
  }, [search]);
if (users.length==0) return<Text>Loading....To user</Text>
  return (
    <SafeAreaView>
       <TextInput
        style={{
          height: 50,
          borderColor: '#919191',
          borderWidth: 1,
          margin: 10,
          paddingLeft: 15,
          borderRadius: 10,
        }}
        onChangeText={(newText) => setSearch(newText)}
        placeholder="Input Search..."
      />
      <View> 
            {filteruser.map((u)=><View key={u.id}>
                <Text  > {u.name}</Text>
                <Button title='show details' onPress={()=>{navigate('details',u.id)}}></Button>
            </View>)} 
  
      

    </View>
    </SafeAreaView>
  )
}