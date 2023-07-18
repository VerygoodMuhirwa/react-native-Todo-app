import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { React, useState } from "react";
export default function App() {
  const [people, setPeople] = useState([
    { name: "Shaun", key: "1" },
    { name: "Yoshi", key: "2" },
    { name: "Mario", key: "3" },
    { name: "Luigi", key: "4" },
    { name: "Peach", key: "5" },
    { name: "Toad", key: "6" },
    { name: "Bowser", key: "7" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.key !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns="2"
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView >
        {people && 
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          })}
      </ScrollView> */}

      {/* This is a flat list component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    marginHorizontal: 10,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
