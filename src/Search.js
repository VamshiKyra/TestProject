import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { Card } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import axios from "axios";
class Search extends Component {
  componentWillMount() {
    axios
      .get(
        "http://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json",
        {}
      )
      .then(res => res.data.features)
      .then(features => {
        console.log(features);
        var i = 0;
        const test = "Vamshi";
        const multipolygon = features
          .filter(f => f.geometry && f.geometry.type === "MultiPolygon")
          .map(feature => {
            const polygon = feature.geometry.coordinates.map(polygon => {
              return <Polygon />;
            });
          });
        // const polygon = features
        //   .filter(f => f.geometry && f.geometry.type === "Polygon")
        //   .map(feature => {
        //     return feature.geometry.coordinates;
        //   });

        // const polyLine = features
        //   .filter(f => f.geometry && f.geometry.type === "MultiPolyline")
        //   .map(feature =>
        //     feature.geometry.coordinates.map(poly => {
        //       console.log(test, poly);
        //     })
        //   );
        // console.log(polyLine);
        // console.log("Polygon", polygon);
        // console.log("MULTIPOLYGON", multipolygon);
      })
      .catch(e => console.log(e));
  }
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
