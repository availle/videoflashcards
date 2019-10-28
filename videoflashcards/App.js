import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import TextSideFlashScreen from "./flashcards/TextSideFlashScreen";
import MediaSideFlashScreen from "./flashcards/MediaSideFlashScreen";
import flashCardReducer from "./FlashCardReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    TextSide: {screen: TextSideFlashScreen},
    MediaSide: {screen: MediaSideFlashScreen}
});

const Navigation = createAppContainer(MainNavigator);

const store = createStore(combineReducers({flashCardReducer: flashCardReducer}));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}


