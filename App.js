import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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

/*PROFE, POR MAS QUE INTENTE NO ME DEJABA EXPORTAR LOS ESTILOS EN UNA CARPETA,
ME DABA ERROR CADA QUE INTENTABA ABRIR LA APP*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#6a1b9a',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ce93d8',
    width: '80%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    fontSize: 16,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 22,
    marginBottom: 25,
    fontWeight: '600',
    color: '#4a148c',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonInitial: {
    backgroundColor: '#ab47bc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonIncrement: {
    backgroundColor: '#ab47bc',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonDecrement: {
    backgroundColor: '#8e24aa',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
