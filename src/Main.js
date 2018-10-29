import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Park from "./park.jpg";
import { Icon } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");
class Main extends Component {
  state = {
    heartIcon: "heart-o"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerComponent}>
          <Text style={styles.headerText}>Details</Text>
        </View>
        <View style={styles.bodyComponent}>
          <Image source={Park} style={{ width: width, height: 200 }} />
        </View>
        <View style={styles.contentComponent}>
          <Text style={styles.headingText}>Fort Clinch State Park</Text>
          <View style={styles.addressComponent}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#1D94CC",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                borderRadius: 30
              }}
              onPress={() => this.setState({ heartIcon: "heart" })}
            >
              <EvilIcons
                name={this.state.heartIcon}
                color="#1D94CC"
                size={18}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.addressText}>2601 Atlantic Avenue</Text>
              <Text style={styles.addressText}>Fernandina Beach, FL 32034</Text>
            </View>
          </View>
          <View style={styles.simpleLine} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: -10,
              height: 35
            }}
          >
            <View style={styles.firstBox}>
              <EvilIcons name="map-marker" size={18} color="#1D94CC" />
              <Text style={styles.boxLabel}>Map</Text>
            </View>
            <View style={styles.middleBox}>
              <MaterialIcons name="directions-car" size={18} color="#1D94CC" />
              <Text style={styles.boxLabel}>Directions</Text>
            </View>
            <View style={styles.lastBox}>
              <MaterialCommunityIcons name="web" size={18} color="#1D94CC" />
              <Text style={styles.boxLabel}>Website</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  headerComponent: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#07435E"
  },
  headerText: {
    color: "white",
    fontStyle: "normal",
    fontSize: 20,
    textAlign: "center"
  },
  bodyComponent: {
    height: 200,
    backgroundColor: "#EAEDED"
  },
  contentComponent: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: "rgba(213, 219, 219, 0.3)"
  },
  headingText: {
    fontFamily: "Optima-Bold",
    fontSize: 26
  },
  addressComponent: {
    height: 50,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15
  },
  addressText: {
    fontSize: 14,
    paddingLeft: 10
  },
  simpleLine: {
    width: width * 0.95,
    height: 1,
    color: "black",
    backgroundColor: "black",
    marginBottom: 20
  },
  firstBox: {
    flexDirection: "row",
    width: width * 0.3,
    backgroundColor: "transparent",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: "#1D94CC",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  middleBox: {
    flexDirection: "row",
    width: width * 0.3,
    backgroundColor: "transparent",
    borderColor: "#1D94CC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  lastBox: {
    flexDirection: "row",
    width: width * 0.3,
    backgroundColor: "transparent",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "#1D94CC",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  boxLabel: {
    fontSize: 14,
    color: "#1D94CC",
    paddingLeft: 5
  }
});
export default Main;
