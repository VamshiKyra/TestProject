import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import ForecastItem from "./ForecastItem";
const renderForecastImage = require("./Weatherimage");
class Weather extends Component {
  render() {
    return (
      <View style={styles.headerView}>
        <View>
          <Text style={styles.location}>Canberra</Text>
          <Text style={styles.forecast}>Partly cloudy</Text>
        </View>
        <View style={styles.centerView}>
          <View style={styles.centerImageView}>
            {renderForecastImage("50d", 100, 100)}
          </View>
          <View>
            <Text style={styles.currentTemp}>15</Text>
            <Text style={styles.feelsLike}>Feels like 1</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomViewLeft}>
            <Text style={styles.bottomViewToday}>Today</Text>
            <Text style={styles.bottomViewTodayDate}>Mon 27 June</Text>
          </View>
          <View style={styles.bottomViewRight}>
            <Text style={styles.low}>7</Text>
            <Text style={styles.high}>20</Text>
          </View>
        </View>
        {/* <View
          style={{
            position: "absolute",
            bottom: 0,
            height: "65%",
            width: "100%",
            backgroundColor: "#FFFFFF"
          }}
        /> */}
        <ForecastItem />
      </View>
    );
  }
}
const styles = {
  headerViewAnimated: {
    width: "100%",
    position: "absolute"
  },
  titleViewAnimated: {
    width: "100%",
    position: "absolute"
  },
  headerView: {
    flex: 1
  },
  location: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 35,
    color: "#fff"
  },
  forecast: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 3,
    color: "#fff"
  },

  centerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  centerImageView: {
    paddingRight: 20
  },
  currentTemp: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "200"
  },
  feelsLike: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500"
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 40
  },
  bottomViewLeft: {
    flex: 1,
    flexDirection: "row"
  },
  bottomViewToday: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 6,
    fontSize: 16
  },
  bottomViewTodayDate: {
    color: "#fff",
    fontSize: 16
  },
  bottomViewRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  low: {
    color: "#fff",
    marginRight: 12,
    fontSize: 18,
    fontWeight: "300",
    width: 22,
    textAlign: "right"
  },
  high: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
    width: 24,
    textAlign: "right"
  },
  dayCol: {
    borderRightColor: "#4d667e",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column"
  },
  weather_icon: {
    fontFamily: "WeatherIcons-Regular"
  },
  week_panel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  week: {
    alignItems: "stretch",
    flex: 6
  },
  day_icon: {
    fontSize: 20,
    color: "#ffffff",
    flex: 1
  },
  day: {
    fontSize: 12,
    color: "#ffffff",
    flex: 1
  },
  date: {
    fontSize: 12,
    color: "#ffffff",
    flex: 1
  }
};
export default Weather;
