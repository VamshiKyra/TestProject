/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from "react-native";
import Main from "./src/Main";
import Weather from "./src/Weather";
import ForecastItem from "./src/ForecastItem";
import Layers from "./src/Layers";
import Search from "./src/Search";
import { Button, Card } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import Payment from "./src/Payment";
import Imagehide from "./src/Imagehide";
import ImageSlider from "./src/ImageSlider";
import LinearGradient from "react-native-linear-gradient";
import Lottie from "./src/Lottie";
import Ball from "./src/Animations/Ball";
import Deck from "./src/Animations/Deck";
import NewPayment from "./src/NewPayment";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      avatarSource: "",
      show: false
    };
  }
  renderCard(item, index) {
    return (
      <Card key={index} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>Futher customization</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }
  pickImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          show: true
        });
      }
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <LinearGradient colors={["#EC7063", "#9B59B6"]}>
        </LinearGradient> */}
        {/* <Search /> */}
        {/* <Lottie /> */}
        <Payment />
        {/* <Ball /> */}
        {/* <Deck data={DATA} renderCard={this.renderCard} /> */}
        {/* <Search />
        <Button
          title="BUTTON"
          containerViewStyle={{
            position: "absolute",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            bottom: "50%"
          }}
          onPress={() => this.pickImage()}
        />

        {this.state.show && (
          <Image
            source={this.state.avatarSource}
            style={{ width: 200, height: 300 }}
          />
        )}
        <View
          style={{
            position: "absolute",
            bottom: "10%",
            right: 10
          }}
        >
          <Image
            source={require("./src/streetview_man.png")}
            style={{ width: 20, height: 39 }}
          />
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#5DADE2"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];
