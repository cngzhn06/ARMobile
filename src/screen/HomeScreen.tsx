import {View, SafeAreaView, StyleSheet, Dimensions, Text} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const {width} = Dimensions.get('window');
const cardWidth = width / 3 - 16;

const gameData = [
  {
    title: 'Sudoku',
    imageUrl:
      'https://i.pinimg.com/originals/13/bc/2a/13bc2abd67236e9454001ebe2e59731b.png',
    navigate: '',
  },
  {
    title: 'Farklı Olan',
    imageUrl:
      'https://melekbalci93.wordpress.com/wp-content/uploads/2013/05/frk1.jpg',
  },
  {
    title: 'Piramit',
    imageUrl:
      'https://egitimevreni.com/wp-content/uploads/2015/05/toplama-islemleri-piramidi.jpg',
    navigate: '',
  },
  {
    title: 'Çok Fazla Kare',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: '',
  },
  {
    title: 'Yeniden Düzenle',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: '',
  },
  {
    title: 'Hepsini Yakala',
    imageUrl: 'https://via.placeholder.com/150',
    navigate: '',
  },
];

export default function HomeScreen() {
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
          <Card key={index} title={game.title} imageUrl={game.imageUrl} />
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
