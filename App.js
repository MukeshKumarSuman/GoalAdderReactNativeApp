import {StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText === '') {
      return;
    }
    setGoals(goals => [...goals, {text:enteredGoalText, id: Date.now()}]);
    closeModel();
  }

  const onDeleteHandler = (id) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(goals => updatedGoals);
  }

  const closeModel = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button title='Add New Goals...' onPress={() => setModalVisible(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} closeModel={closeModel}/>
      <View style={styles.goalsContainer}>
        <View><Text style={styles.goalHeader}>My Goals...</Text></View>
        <FlatList data={goals} renderItem={goalData => {
          return <GoalItem text={goalData.item.text} id={goalData.item.id} onPress={onDeleteHandler}/>
        }} keyExtractor={(item, index) => item.id}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 8
  },
  goalHeader: {
    textAlign: 'center',
    color: 'green',
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 20
  },
});