import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";

class MediaSideFlashScreen extends React.Component {
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

const mapStateToProps = (state) => {
    const {activeFlashCardSet} = state;
    return {activeFlashCardSet}
};

export default connect(mapStateToProps)(MediaSideFlashScreen);