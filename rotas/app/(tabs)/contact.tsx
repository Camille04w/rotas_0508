import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Contact() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Button title="Voltar" onPress={() => router.push('/home')} color="#1F511E" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', 
  },
  title: {
    fontSize: 28,
    color: '#000', 
    marginBottom: 20,
    fontFamily: 'Inter', 
  },
});
 