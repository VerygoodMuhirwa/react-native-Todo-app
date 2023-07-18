import { StyleSheet, Text, View ,Button, TextInput} from "react-native";
import { React, useState } from "react";

const AddTodo = ({submitHandler ,text, setText}) => {
 
    const changeHandler = (val) => {
        setText(val)
    }
  
    return ( 
        <View>
            <TextInput style={styles.input} placeholder="New todo..."  onChangeText={changeHandler}  />
            <Button title="Add todo" color="coral" onPress={() => {
                submitHandler(text)
            }
                
            } />
</View> 
     );
}
 
export default AddTodo;


const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:"#ddd"
    }
})