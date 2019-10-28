import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

export default class TextSideFlashScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        const turnpls = () => {
            navigate("MediaSide")
        };
        return (
            <View style={styles.container}>
                <Text>Text Side</Text>
                <Button title="Turn pls" onPress={turnpls}>Turn Card</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
