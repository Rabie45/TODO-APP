import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import AddItem from "./AddItem";
export default function TodoItem({ item, pressHandeler }) {
  
  return (
    <TouchableOpacity onPress={()=>{
        Alert.alert(item.text,item.description)}
    }>
      <Text style={styles.item}>{item.text}</Text>
      <Button
        color="#AC7BA9"
        onPress={() => pressHandeler(item.key)}
        title="Done"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
