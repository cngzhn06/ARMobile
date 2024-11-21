import { View, SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24; // İki kart yan yana olacak şekilde

const gameData = [
  {
    title: 'Sudoku',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'Sudoku',
  },
  {
    title: 'Farklı Olan',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'Different',
  },
  {
    title: 'Piramit',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'Pyramid',
  },
  {
    title: 'Çok Fazla Kare',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'MultiSquare',
  },
  {
    title: 'Hafıza Kutuları',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'MemoryBoxes',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Matematikçiler problemleri çözerken MANTIKLI, SİSTEMLİ ve YARATICI
        olmalıdır.
      </Text>
      <View style={styles.grid}>
        {gameData.map((game, index) => (
          <Card
            key={index}
            title={game.title}
            imageUrl={game.imageUrl}
            onPress={() => navigation.navigate(game.navigate)}
            style={{ width: cardWidth }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
