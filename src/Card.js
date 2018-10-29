import React, { Component } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
  }
  switchChange() {
    this.state.switch
      ? this.setState({ switch: false })
      : this.setState({ switch: true });
  }
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            margin: 5,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
            borderColor: "#606060"
          }}
        >
          <Text style={{ fontSize: 14 }}>{this.props.title}</Text>
          <Switch
            value={this.state.switch}
            onValueChange={() => this.switchChange()}
          />
        </View>
        <View
          style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 1 }}
        />
      </View>
    );
  }
}
export default Card;
