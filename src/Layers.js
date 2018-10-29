import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TextInput,
  RefreshControl,
  Switch
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/AntDesign";
import Card from "./Card";
class Layers extends Component {
  constructor() {
    super();
    this.state = {
      default: {
        borderWidth: 2,
        borderColor: "#4687F1"
      },
      satellite: {
        borderWidth: 0
      },
      Terrain: {
        borderWidth: 0
      },
      refreshing: false,
      switch: false
    };
  }

  defaultImage() {
    this.setState({
      default: {
        borderWidth: 2,
        borderColor: "#4687F1"
      },
      satellite: { borderWidth: 0 },
      Terrain: { borderWidth: 0 }
    });
  }
  satelliteImage() {
    this.setState({
      satellite: {
        borderWidth: 2,
        borderColor: "#4687F1"
      },
      default: { borderWidth: 0 },
      Terrain: { borderWidth: 0 }
    });
  }

  terrainImage() {
    this.setState({
      Terrain: {
        borderWidth: 2,
        borderColor: "#4687F1"
      },
      default: { borderWidth: 0 },
      satellite: { borderWidth: 0 }
    });
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.headText}>Map type</Text>
            <EvilIcons name="close" size={22} color="#9E9E9E" />
          </View>

          <View style={styles.imageConatiner}>
            <TouchableWithoutFeedback onPress={() => this.defaultImage()}>
              <View style={styles.imageColumn}>
                <Image
                  source={require("./Default.png")}
                  style={[styles.imageSize, this.state.default]}
                />
                <Text style={styles.labelText}>Default</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => this.satelliteImage()}>
              <View style={styles.imageColumn}>
                <Image
                  source={require("./satellite.png")}
                  style={[styles.imageSize, this.state.satellite]}
                />
                <Text style={styles.labelText}>Satellite map</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.terrainImage()}>
              <View style={styles.imageColumn}>
                <Image
                  source={require("./Terrain.png")}
                  style={[styles.imageSize, this.state.Terrain]}
                />
                <Text style={styles.labelText}>Terrain</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              height: 10,
              width: "100%",
              color: "#D5D5D5"
            }}
          />
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              margin: 10
            }}
          >
            Layers
          </Text>
          <Card title={"Layer 1"} />
          <Card title={"Layer 2"} />
          <Card title={"Layer 3"} />
          <Card title={"Layer 4"} />
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              margin: 5,
              padding: 5,
              borderColor: "#606060"
            }}
          >
            <Text style={{ fontSize: 14 }}>Satellite map</Text>
            <Switch
              value={this.state.switch}
              onValueChange={() => this.setState({ switch: true })}
            />
          </View>
          <View
            style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 1 }}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  headText: {
    fontStyle: "normal",
    fontSize: 14,
    marginBottom: 5,
    color: "#606060"
  },
  imageConatiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 15
  },
  imageSize: {
    height: 56,
    width: 77
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 65
  },
  labelText: {
    fontSize: 11,
    marginTop: 10,
    color: "#5F5F5F"
  },
  imageColumn: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }
};
export default Layers;
