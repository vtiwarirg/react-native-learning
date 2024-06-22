import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";

interface Goal {
  id: string;
  text: string;
}

 const App:React.FC=()=>{
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const cancelAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText:string) => {
    setCourseGoals((currentCourseGoals:Goal[]) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    cancelAddGoalHandler();
  };

  const deleteGoalHandler = (goalId:string) => {
    setCourseGoals((currentCourseGoals:Goal[]) => {
      return currentCourseGoals.filter((goal:Goal) => goal.id !== goalId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={cancelAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;