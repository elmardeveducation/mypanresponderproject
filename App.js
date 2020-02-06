import React, { Component } from "react";
import { StyleSheet, Text,  View, PanResponder } from "react-native";
export default class App extends Component {

  constructor(props) {
    super(props);
 this.state={marginLeft:1}
//OUR Panresponder
this._panResponder = PanResponder.create({
  // Ask to be the responder:
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

  onPanResponderGrant: (evt, gestureState) => {
    // The gesture has started. Show visual feedback so the user knows
    // what is happening!
    // gestureState.d{x,y} will be set to zero now
  },
  onPanResponderMove: (evt, gestureState) => {
    // The most recent move distance is gestureState.move{X,Y}
    // The accumulated gesture distance since becoming responder is
    // gestureState.d{x,y}
    console.log("movement=", gestureState.moveX)
  this.setState(
    {marginLeft : gestureState.moveX}
  )
  },
  onPanResponderTerminationRequest: (evt, gestureState) => true,
  onPanResponderRelease: (evt, gestureState) => {
    // The user has released all touches while this view is the
    // responder. This typically means a gesture has succeeded
  },
  onPanResponderTerminate: (evt, gestureState) => {
    // Another component has become the responder, so this gesture
    // should be cancelled
  },
  onShouldBlockNativeResponder: (evt, gestureState) => {
    // Returns whether this component should block native components from becoming the JS
    // responder. Returns true by default. Is currently only supported on android.
    return true;
  },
});
//end of Panresponder

  }


  render() {
    return (
      <View >
        <View style={[styles.child, {marginLeft: this.state.marginLeft}]}
        {...this._panResponder.panHandlers} />
          <Text style={{fontSize: 40}}>Swiper</Text> 
          </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  child: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    height: 100,
    backgroundColor: "red"
  }
});
