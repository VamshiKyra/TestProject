import React, { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
class Lottie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView
          style={{ height: 300, width: 300 }}
          source={require("./motorcycle.json")}
          autoPlay
          loop
        />
        <LottieView
          style={{ height: 300, width: 300 }}
          source={require("./material_wave_loading.json")}
          autoPlay
          loop
        />
        {/* <LottieView style={{}} source={require("./motorcycle.json")} /> */}
      </View>
    );
  }
}
export default Lottie;
