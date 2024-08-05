import {View, Image, StyleSheet, Platform } from 'react-native';

import Home from './home'
import Sobre from './about'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});