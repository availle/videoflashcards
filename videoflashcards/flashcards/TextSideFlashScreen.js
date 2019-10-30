import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {flashCardTurnedToMedia} from "../Actions";

class TextSideFlashScreen extends React.Component {
    turnpls = () => {
        const {replace} = this.props.navigation;
        this.props.dispatch(flashCardTurnedToMedia());
        replace("MediaSide")
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.active[this.props.current].text}</Text>
                <Button title="Turn pls" onPress={this.turnpls}>Turn Card</Button>
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
    console.log('MapStateToProps called on TextSide');
    return {current: flashCardReducer.currentCardId, active: flashCardReducer.activeCards}
};



export default connect(mapStateToProps)(TextSideFlashScreen);