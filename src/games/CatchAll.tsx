import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";

const CatchAll = () => {
  const handleDraw = () => {
    Alert.alert("Bilgilendirme", "Bu oyunu tam bir çizim özelliğiyle geliştirmeniz gerekiyor.");
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>Hepsini Yakala</Text>
      <View style={styles.board}>
        <PanGestureHandler onGestureEvent={handleDraw}>
          <View style={styles.grid}>
            {[...Array(9)].map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default CatchAll;

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
  board: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dot: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    margin: 5,
  },
});
