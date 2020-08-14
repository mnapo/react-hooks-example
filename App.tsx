import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export default function App(props) {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const incrementCounter = () => {
    setCounter(counter+1);
  };

  const handleTextChange = (text) => {
    setText(text);
  };

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <View style={styles.container}>
      <Text>contador: {counter}</Text>
      <Button onPress = {incrementCounter}>Pepito</Button>
      <View>
        <Text>{text}</Text>
        <TextInput value={text} onChangeText={handleTextChange}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});