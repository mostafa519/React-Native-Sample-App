import React, { useCallback, useState } from "react";

import {
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import styles from "../styles/styles";
export default function ToDoList() {
  const [todo, setTodo] = useState("");
  let [count, setCount] = useState(0);
  const [err, setErr] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDisabled, setDisabled] = useState(false);

  const handleAddTodo = useCallback((val) => {
    if (val.length <= 3) {
      setErr("Please Enter Valid input :");
    } else {
      setErr("");
      if (todo.length > 0) {
        const newTodo = {
          id: Date.now().toString(),
          todo: todo,
        };
        setTodos([...todos, newTodo]);
        setTodo("");
      }
      setCount(0);
    }
  });

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
    setCount(--count);
  };
  const handleComplete = useCallback(() => {
    setCount(++count);
    console.log(count);
  });

  const handlePress = (id) => {
    setDisabled(isDisabled ? false : true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.addxt}
        placeholder="Add todo List"
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />
      <Text>{err}</Text>
      <Button title="Add" onPress={() => handleAddTodo(todo)} />
      <Text>The Count is : {count}</Text>
      <FlatList
        ListEmptyComponent={<Text style={styles.addxt}>No Data</Text>}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addxt}>
            <ScrollView horizontal>
              <Text style={[isDisabled && styles.DecDisabled]}>
                {item.todo}{" "}
              </Text>

              <View style={styles.std}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.btnContainer}
                  onPress={() => handleDeleteTodo(item.id)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.stdd}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.btnContainer}
                  onPress={() => {
                    handlePress(item.id);
                  }}
                >
                  <Text>make line</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.stdd}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.btnContainer}
                  onPress={() => {
                    handleComplete();
                  }}
                >
                  <Text>complete</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
