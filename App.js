import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/styles.js';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleSetInitial = () => {
    const value = parseInt(inputValue) || 0;
    setCounter(value);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador con valor inicial</Text>
      <Text style={styles.counterText}>Contador: {counter}</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar valor inicial"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity style={styles.buttonInitial} onPress={handleSetInitial}>
        <Text style={styles.buttonText}>Valor inicial</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonIncrement} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Aumentar valor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDecrement} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Disminuir valor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
