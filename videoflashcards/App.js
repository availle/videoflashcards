import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import TextSideFlashScreen from "./flashcards/TextSideFlashScreen";
import MediaSideFlashScreen from "./flashcards/MediaSideFlashScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  TextSide: {screen: TextSideFlashScreen},
  MediaSide: {screen: MediaSideFlashScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

const startFlashCarding = () => {
  console.log('flashcarding started')
};

