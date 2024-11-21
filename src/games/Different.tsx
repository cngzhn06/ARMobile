import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";

const generateShapes = () => {
  const shapes = Array.from({ length: 8 }, () => ({
    color: "blue",
    size: 50,
  }));
  const randomIndex = Math.floor(Math.random() * shapes.length);
  shapes[randomIndex] = { color: "yellow", size: 50 };
  return { shapes, answer: randomIndex };
};

const Different = () => {
  const [data, setData] = useState(generateShapes());

  const handlePress = (index) => {
    if (index === data.answer) {
      Alert.alert("Tebrikler!", "Doğru şekli buldunuz.");
      setData(generateShapes());
    } else {
      Alert.alert("Yanlış!", "Tekrar deneyin.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farklı Olanı Bul</Text>
      <View style={styles.grid}>
        {data.shapes.map((shape, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.shape,
              { backgroundColor: shape.color, width: shape.size, height: shape.size },
            ]}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Different;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 200,
  },
  shape: {
    margin: 10,
    borderRadius: 5,
  },
});
