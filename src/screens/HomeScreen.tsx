/********* THE API URL HAVE BEEN REMOVED FOR PUBLIC VERSION OF THE PROJECT. PLEASE INSERT MOCK SETSTATE FUNCTION THAT RETURNS A BOOLEAN TO TOGGLE BETWEEN STATEs TO VIEW PROJECT */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import AutoHeightImage from "react-native-auto-height-image";
import Snow from "react-native-snow";
import SnowButton from "../components/SnowButton";
import { NavigationStackOptions } from "react-navigation-stack";

const SNOWDAY_API_URL = "";

// @ts-ignore
import image from "../assets/Jetpack-logo.png";

export default class HomeScreen extends Component {
  _isMounted = false;
  static navigationOptions: NavigationStackOptions = {
    headerTitle: () => (
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 19, color: "#fff" }}>
          Snow Day
        </Text>
      </View>
    ),

    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#4d738a",
      shadowRadius: 0,
      shadowOffset: {
        height: 0
      }
    }
  };

  state = {
    schoolStatus: undefined
  };

  getAPIStatus = async () => {
    let response = await fetch(SNOWDAY_API_URL);
    let data = await response.json();
    let status = await data[0];
    return status.status;
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ schoolStatus: this.getAPIStatus() });
  }

  async componentDidUpdate() {
    this.setState({ schoolStatus: await this.getAPIStatus() });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  updateAPIKey = input => {
    this.setState({ apiKey: input });
  };

  updateAPI = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });
    return await response.json();
  };

  updateSchoolStatus = async () => {
    await this.updateAPI(SNOWDAY_API_URL, {
      status: !this.state.schoolStatus,
      id: "MY_API_ID"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.schoolStatus ? <Snow snowfall="medium" /> : <View />}

        <LinearGradient
          colors={["#abafbb", "#d5d7e3"]}
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%"
          }}
        >
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 20,
              alignItems: "center"
            }}
            source={require("../assets/snow.jpg")}
          >
            <SafeAreaView>
              <View style={{ padding: 20 }}>
                <Card
                  value={this.state.schoolStatus}
                  onValueChange={this.updateSchoolStatus}
                />

                <View style={styles.bottom}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 50
                    }}
                  >
                    <SnowButton
                      style={{ marginBottom: 20 }}
                      state={this.state.schoolStatus}
                      onPress={() => this.updateSchoolStatus()}
                    />
                    {this.state.schoolStatus ? (
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          textAlign: "center"
                        }}
                      >
                        Schools are{"\n"}currently close
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          textAlign: "center"
                        }}
                      >
                        Schools are{"\n"}currently open
                      </Text>
                    )}
                  </View>
                  <AutoHeightImage width={100} source={image} />
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center"
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 100,
    alignItems: "center"
  }
});
