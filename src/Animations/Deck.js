import React, { Component } from "react";
import { View, Animated, Text, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // debugger;
        // console.log(gesture);
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
        // console.log(event);
      },
      onPanResponderRelease: () => {}
    });
  }
  renderCards() {
    return this.props.data.map((item, index) => {
      return this.props.renderCard(item, index);
    });
  }
  render() {
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={this.position.getLayout()}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
