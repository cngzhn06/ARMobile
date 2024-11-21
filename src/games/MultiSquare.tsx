import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const MultiSquare = () => {
  const [numOfSquares, setNumOfSquares] = useState(0); 
  const [input, setInput] = useState("");

  const generateSquares = () => {
    const randomBase = Math.floor(Math.random() * 3) + 3; 
    const totalSquares = (randomBase * (randomBase + 1) * (2 * randomBase + 1)) / 6; 
    setNumOfSquares(totalSquares);
  };

  useEffect(() => {
    generateSquares();
  }, []);

  const handleCheck = () => {
    if (parseInt(input) === numOfSquares) {
      Alert.alert("Tebrikler!", "Doğru cevap.");
      generateSquares();
      setInput(""); 
    } else {
      Alert.alert("Yanlış!", "Tekrar deneyin.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kaç Kare Var?</Text>
      <View style={styles.shapeContainer}>
        {Array.from({ length: Math.sqrt(numOfSquares) }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.square,
              {
                width: 200 - i * 20,
                height: 200 - i * 20,
              },
            ]}
          />
        ))}
      </View>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Kaç kare olduğunu yaz"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Kontrol Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MultiSquare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  shapeContainer: {
    marginBottom: 20,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  square: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
