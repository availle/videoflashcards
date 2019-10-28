import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

export default class MediaSideFlashScreen extends React.Component {
     flashCardGotIt = () => {
         console.log('got it!')
    };

     flashCardNope = () => {
         console.log('nope!')
     };

     render() {
         return (
             <View style={styles.container}>
                 <Text>Media Side</Text>
                 <Button title="Correct" onPress={this.flashCardGotIt}>Correct</Button>
                 <Button title="Nope" onPress={this.flashCardNope}>Nope</Button>
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
