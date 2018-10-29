import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { Card } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
class Search extends Component {
  render() {
    return (
      <View
        style={{
          top: 50,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Card
          containerStyle={{
            flexDirection: "row",
            padding: 7,
            margin: 5,
            borderRadius: 2,
            height: 40,
            width: "80%"
          }}
          wrapperStyle={{
            flexDirection: "row",
            padding: 0,
            margin: 0,
            alignContent: "space-between",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <EvilIcons name="search" size={22} color="#9E9E9E" />
          <TextInput
            placeholder={"Search"}
            style={{
              width: "85%",
              height: "100%"
            }}
          />
          <EvilIcons name="close" size={16} color="#9E9E9E" />
        </Card>
      </View>
    );
  }
}

export default Search;
