import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
 
import styles from '../styles/styles';

export default function TodoListScreen() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        todo: todo,
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  const handleDeleteTodo = id => {
    const filteredTodos = todos.filter(item => item.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.addxt}
        placeholder="Add todo"
        onChangeText={text => setTodo(text)}
        value={todo}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
      
         ListEmptyComponent={<Text>No Data</Text>} 
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.addedit} horizontal>
            <Text>{item.todo} </Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteTodo(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
 