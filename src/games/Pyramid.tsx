import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const generatePyramid = () => {
  const base = Array.from({ length: 4 }, () => Math.floor(Math.random() * 20) + 1); // Taban için rastgele sayılar
  const pyramid = [base];

  for (let i = 3; i > 0; i--) {
    const currentLevel = [];
    for (let j = 0; j < i; j++) {
      currentLevel.push(pyramid[0][j] + pyramid[0][j + 1]);
    }
    pyramid.unshift(currentLevel);
  }

  const blueBoxIndex = Math.floor(Math.random() * base.length);
  return { pyramid, blueBoxIndex };
};

const PiramitBulmacasi = () => {
  const [game, setGame] = useState(generatePyramid());
  const [input, setInput] = useState("");

  const handleCheck = () => {
    const correctAnswer = game.pyramid[3][game.blueBoxIndex];
    if (parseInt(input) === correctAnswer) {
      Alert.alert("Tebrikler!", "Doğru cevap.");
      setGame(generatePyramid());
      setInput("");
    } else {
      Alert.alert("Yanlış!", `Doğru cevap: ${correctAnswer}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piramit Bulmacası</Text>
      <View style={styles.pyramid}>
        {game.pyramid.map((level, i) => (
          <View key={i} style={styles.level}>
            {level.map((num, j) => (
              <View
                key={j}
                style={[
                  styles.block,
                  i === 3 && j === game.blueBoxIndex ? styles.blueBlock : styles.normalBlock,
                ]}
              >
                <Text style={styles.blockText}>
                  {i === 3 && j === game.blueBoxIndex ? "?" : num}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Mavi kutu hangi sayı?"
        keyboardType="number-pad"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Cevabı Kontrol Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PiramitBulmacasi;

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
  pyramid: {
    alignItems: "center",
    marginBottom: 20,
  },
  level: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  block: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  normalBlock: {
    backgroundColor: "#f0f0f0",
    borderColor: "#ddd",
  },
  blueBlock: {
    backgroundColor: "#add8e6",
    borderColor: "#87ceeb",
  },
  blockText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
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
