import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function MediaSideFlashScreen() {
    const flashCardGotIt = () => {
    };

    const flashCardNope = () => {};

    var aSide = true;
    return (
        <View style={styles.container}>
            <Text>Media Side</Text>
            <Button title="Correct" onPress={flashCardGotIt}>Correct</Button>
            <Button title="Nope" onPress={flashCardNope}>Nope</Button>
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
