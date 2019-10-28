import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

export default class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>This is a test.</Text>
                <Button title="Start Flashcarding!" onPress={ () => navigate("TextSide")}>Start Flash Card Training!</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bbbb',
        alignItems: 'center',
        justifyContent: 'center',
    },
});