import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const MemoryBoxes = () => {
  const [gridSize, setGridSize] = useState(3); 
  const [highlightedBoxes, setHighlightedBoxes] = useState([]);
  const [userSelections, setUserSelections] = useState([]); 
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setScore] = useState(0); 

  const startNewRound = () => {
    const totalBoxes = gridSize * gridSize;
    const randomBoxes = Array.from({ length: gridSize }, () =>
      Math.floor(Math.random() * totalBoxes)
    );
    setHighlightedBoxes(randomBoxes);
    setUserSelections([]);
    setIsPlaying(true);

    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  useEffect(() => {
    startNewRound();
  }, [gridSize]);

  const handleBoxPress = (index) => {
    if (!isPlaying) {
      if (userSelections.includes(index)) return; 

      const newSelections = [...userSelections, index];
      setUserSelections(newSelections);

      if (!highlightedBoxes.includes(index)) {
        Alert.alert("Yanlış!", `Oyun bitti. Skorunuz: ${score}`);
        setGridSize(3); 
        setScore(0);
        startNewRound();
        return;
      }

      if (newSelections.length === highlightedBoxes.length) {
        Alert.alert("Tebrikler!", "Sonraki tura geçiyorsunuz.");
        setScore(score + 1);
        setGridSize(gridSize + 1); 
      }
    }
  };

  const renderGrid = () => {
    const totalBoxes = gridSize * gridSize;
    return Array.from({ length: totalBoxes }).map((_, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.box,
          isPlaying && highlightedBoxes.includes(index) ? styles.highlightedBox : styles.normalBox,
          userSelections.includes(index) ? styles.selectedBox : null,
        ]}
        onPress={() => handleBoxPress(index)}
        disabled={isPlaying} 
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hafıza Kutuları</Text>
      <Text style={styles.score}>Skor: {score}</Text>
      <View style={[styles.grid, { width: gridSize * 50 }]}>
        {renderGrid()}
      </View>
    </View>
  );
};

export default MemoryBoxes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  normalBox: {
    backgroundColor: "#f0f0f0",
  },
  highlightedBox: {
    backgroundColor: "#ffeb3b",
  },
  selectedBox: {
    backgroundColor: "#4caf50",
  },
});
