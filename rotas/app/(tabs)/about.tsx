import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function AboutScreen() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Button title="Voltar" onPress={() => router.push('/home')} color="#000" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F511E', 
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#86FF84', 
    marginBottom: 20,
    fontFamily: 'Inter', 
  },
  description: {
    fontSize: 16,
    color: '#FFF', 
    textAlign: 'center',
    fontFamily: 'Love Light', 
  },
});