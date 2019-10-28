import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const startFlashCarding = () => {
  console.log('flashcarding started')
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a test.</Text>
      <Button title="Start Flashcarding!" onPress={startFlashCarding}>Start Flash Card Training!</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bbbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
