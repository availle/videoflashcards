import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {flashCardOk} from "../Actions";

class MediaSideFlashScreen extends React.Component {
     flashCardGotIt = () => {
         const {replace} = this.props.navigation;
         this.props.dispatch(flashCardOk(this.props.current));
         replace("TextSide");
    };

     flashCardNope = () => {
         console.log('nope!')
     };

     render() {
         return (
             <View style={styles.container}>
                 <Text>{this.props.active[this.props.current].media}</Text>
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
    const {flashCardReducer} = state;
    console.log("MapStateToProps called on MediaSide;");
    return {current: flashCardReducer.currentCardId, active: flashCardReducer.activeCards}
};



export default connect(mapStateToProps)(MediaSideFlashScreen);