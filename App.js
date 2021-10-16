import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ViewPropTypes,
} from "react-native";
import Headers from "./componant/component";
import TodoItem from "./componant/TODOItems";
import AddItem from "./componant/AddItem";
export default function App() {
 
  const [todos, setTODO] = useState([
    {
      text: "Example 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      key: "1",
    },
    {
      text: "Example 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      key: "2",
    },
  ]);
  const pressHandeler = (key) => {
    setTODO((prevTodo) => {
      return prevTodo.filter((todos) => todos.key != key);
    });
  };
  const submitHandler = (text, description) => {
    setTODO((prevTodo) => {
      return [
        { text: text, description: description, key: Math.random().toString() },
        ...prevTodo,
      ];
    });
  };
  return (
    <View style={styles.container}>
      <Headers />
      <View style={styles.content}>
        <AddItem submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandeler={pressHandeler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
