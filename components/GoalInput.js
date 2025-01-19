import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";


const GoalInput = props => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const goalAddHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.imgae} source={require('../assets/images/goal.png')}/>
                <TextInput placeholder='Your Goals!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={goalAddHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => props.closeModel()} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>

    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cccccc',
        flex: 1,
        backgroundColor: '#311b6b'
      },
      imgae: {
        height: 100,
        width: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: '80%',
        marginRight: 10,
        padding: 16,
        color: '#120438' // Text color
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        marginHorizontal: 8,
      }
});