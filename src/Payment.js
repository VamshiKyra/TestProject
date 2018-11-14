import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
  }
  _onChange = form => {
    // console.log(form);
    if (form.valid) {
      this.setState({ card: form.values });
    }
  };
  render() {
    console.log(this.state);
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CreditCardInput onChange={this._onChange} />
      </View>
    );
  }
}

export default Payment;
