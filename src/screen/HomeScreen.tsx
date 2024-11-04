import {View, SafeAreaView, StyleSheet, Dimensions, Text} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const cardWidth = width / 3 - 16;

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
    title: 'Yeniden Düzenle',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'Rerange',
  },
  {
    title: 'Hepsini Yakala',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: 'CatchAll',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Matematikçiler problemleri çözerken MANTIKLI,SİSTEMLİ ve YARATICI
          olmalıdır.
        </Text>
      </View>
      <View style={styles.row}>
        {gameData.map((game, index) => (
          <Card
            key={index}
            title={game.title}
            imageUrl={game.imageUrl}
            onPress={() => navigation.navigate(game.navigate)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Kartların iki satıra yayılmasını sağlamak için
    marginLeft: width * 0.03,
  },
});
