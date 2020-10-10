import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInPage from './components/LogInPage.js'
import TestButton from './components/TestButton.js'

export default function App() {
  return (
    <View style={styles.container}>
      <LogInPage/>
      <StatusBar style="auto" />
      <TestButton name="Go to Form"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
