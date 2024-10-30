import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
}

export default function Card({ title, imageUrl }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%', 
    margin: 4, 
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 150, 
  },
  title: {
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold',
  },
});
