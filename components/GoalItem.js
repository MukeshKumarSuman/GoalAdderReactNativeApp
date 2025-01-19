import { StyleSheet, View, Text, Pressable } from "react-native";

export default GoalItem = props => {
    return(
          <View style={styles.goalItem}>
            <Pressable onPressOut={() => props.onPress(props.id)} android_ripple={{color: 'red'}} 
            style={(pressedData) => pressedData.pressed && styles.pressedItem}>
              <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
          </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5
      },
      goalItemText: {
        color: 'white',
        fontSize: 20,
        padding: 8,
      },
});