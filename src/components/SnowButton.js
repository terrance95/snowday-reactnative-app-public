import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SimpleAnimation } from "react-native-simple-animations";

const SnowButton = ({ style, state, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {state ? (
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <View style={[styles.container, styles.on, style]}>
            <Feather name="cloud-snow" size={36} style={styles.snow} />
          </View>
        </Animatable.View>
      ) : (
        <SimpleAnimation direction="up" movementType="slide" distance={400}>
          <View style={[styles.container, styles.off, style]}>
            <Feather name="sun" size={36} style={styles.snow} />
          </View>
        </SimpleAnimation>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#94acbd",
    justifyContent: "center",
    alignItems: "center"
  },
  on: {
    backgroundColor: "#202b33"
  },
  off: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  snow: {
    lineHeight: 0,
    color: "#fff"
  }
});

export default SnowButton;
