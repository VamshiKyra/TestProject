import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Animated
} from "react-native";

let { width, height } = Dimensions.get("window");
const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 200;
const PROFILE_IMAGE_MIN_HEIGHT = 100;

class Imagehide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: "clamp"
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp"
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightskyblue",
            height: headerHeight,
            zIndex: headerZindex,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              bottom: headerTitleBottom
            }}
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
              Vamshi Rajarikam
            </Text>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              alignSelf: "center",
              borderWidth: 2,
              borderColor: "white"
            }}
          >
            <Image
              source={require("./park.jpg")}
              style={{ flex: 1, height: null, width: null }}
            />
          </Animated.View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 26,
                paddingLeft: 10,
                textAlign: "center"
              }}
            >
              Vamshi Rajarikam
            </Text>
          </View>
          <View style={{ height: 800 }} />
        </Animated.ScrollView>
      </View>
    );
  }
}
export default Imagehide;
