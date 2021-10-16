import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

submitAndClear = () => {
  this.props.writeText(this.state.text);
  this.setState({
    text: "",
  });
};
export default function AddItem({ submitHandler }) {
  const [text, setText] = useState("");
  const [description, setDiscription] = useState("");
  const changeHanDler = (val) => {
    setText(val);
  };
  const [Textinput, setTextInput] = useState();
  const cleatInput = () => {
    setTextInput('')
  };
  const changeDiscription = (dis) => {
    setDiscription(dis);
  };

  return (
    <View style={styles.add}>
      <TextInput placeholder="new todo" onChangeText={changeHanDler} />
      <TextInput
        
        clearButtonMode="always"
        multiline={true}
        numberOfLines={4}
        placeholder="discription..."
        onChangeText={changeDiscription}
        value={this.text}
       
      />
      <Button
        onPress={(() => submitHandler(text, description) ), ()=>{
          this.setState({text:''})
        }}
        title="add"
        color="#AC7BA9"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  add: {
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  AddBtn: {
    backgroundColor: "#AC7BA9",
  },
});
