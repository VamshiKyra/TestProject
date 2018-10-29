import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
const renderForecastImage = require("./Weatherimage");
class ForecastItem extends Component {
  render() {
    return (
      <View style={styles.forecastView}>
        <View style={styles.forecastList}>
          <View style={styles.forecastItem}>
            <View stye={styles.forecastItemDayView}>
              <Text style={styles.dayText}>Monday</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              {renderForecastImage("09d", 22, 22)}
              <Text style={styles.forecastItemTempLow}>4</Text>
              <Text style={styles.forecastItemTempHigh}>10</Text>
            </View>
          </View>
          <View style={styles.forecastItem}>
            <View stye={styles.forecastItemDayView}>
              <Text style={styles.dayText}>Tuesday</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              {renderForecastImage("09d", 22, 22)}
              <Text style={styles.forecastItemTempLow}>4</Text>
              <Text style={styles.forecastItemTempHigh}>10</Text>
            </View>
          </View>
          <View style={styles.forecastItem}>
            <View stye={styles.forecastItemDayView}>
              <Text style={styles.dayText}>Wednesday</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              {renderForecastImage("09d", 22, 22)}
              <Text style={styles.forecastItemTempLow}>4</Text>
              <Text style={styles.forecastItemTempHigh}>10</Text>
            </View>
          </View>
          <View style={styles.forecastItem}>
            <View stye={styles.forecastItemDayView}>
              <Text style={styles.dayText}>Thursday</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              {renderForecastImage("09d", 22, 22)}
              <Text style={styles.forecastItemTempLow}>4</Text>
              <Text style={styles.forecastItemTempHigh}>10</Text>
            </View>
          </View>
          <View style={styles.forecastItem}>
            <View stye={styles.forecastItemDayView}>
              <Text style={styles.dayText}>Friday</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              {renderForecastImage("09d", 22, 22)}
              <Text style={styles.forecastItemTempLow}>4</Text>
              <Text style={styles.forecastItemTempHigh}>11</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forecastView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "row",
    borderColor: "#e2e2e2",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 3
  },
  forecastList: {
    flex: 1,
    borderColor: "#E2E2E2",
    paddingLeft: 12,
    paddingRight: 12
  },
  forecastItem: {
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: "row",
    borderColor: "#F4F4F4",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  forecastItemDayView: {
    flex: 1
  },
  forecastItemDataView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  dayText: {
    fontSize: 16
  },
  forecastItemTempLow: {
    textAlign: "right",
    marginLeft: 16,
    width: 20,
    color: "#B0B5BF",
    fontSize: 16
  },
  forecastItemTempHigh: {
    textAlign: "right",
    marginLeft: 16,
    width: 20,
    fontSize: 16
  }
});
export default ForecastItem;
