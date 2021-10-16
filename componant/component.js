import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function Headers(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                My todo 
            </Text>
        </View>
    )
}


const styles= StyleSheet.create({
    header:{

        height:90,
        paddingTop:40,
        backgroundColor:'#F5B4F1',
     

    },
    title:{
        paddingTop:15,
        textAlign:"center",
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
});