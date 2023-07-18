import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { React } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({item, pressHandler}) => {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333" />
          <Text  style= {styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
}
 
export default TodoItem;


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        flexDirection:"row",
        borderStyle: "dashed",
        borderRadius:10
        
    },
    itemText: {
        marginLeft:10
    }
})