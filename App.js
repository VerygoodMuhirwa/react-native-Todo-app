import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableWithoutFeedback, TouchableOpacity,Alert,Text,FlatList, View,ScrollView ,TextInput, Button, Keyboard} from 'react-native';
import { React, useState } from 'react';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import SandBox from './components/SandBox';
export default function App() {
  const [todo, setTodo]  =useState([
    { text: "buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
    { text: "Eat a mango", key: "4" },
    { text: "Drive a car", key: "5" },
  ])
     const [text, setText] = useState("");


  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodo((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
      
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long", [
        {text:"Understood", onPress:()=>console.log("Alert closed")}
      ])
    }

  };
  return (
    //  <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log("Key board dismissed");
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo
            submitHandler={submitHandler}
            text={text}
            setText={setText}
          />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                // <Text>{item.text }</Text>
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20,
    flex:1
  }
  
});
