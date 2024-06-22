import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem:React.FC<{text:string;id:string;onDeleteItem:(id:string)=>void}> = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
  pressItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
