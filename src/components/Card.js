import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleAnimation } from "react-native-simple-animations";
import { Ionicons } from "@expo/vector-icons";
console.disableYellowBox = true;

const Card = ({ value }) => {
  return (
    <SimpleAnimation direction="up" movementType="slide" distance={400}>
      <View style={styles.outerWrapper}>
        <View style={styles.wrapper}>
          <View>
            <View style={styles.snowdayWrapper}>
              <Text style={styles.smallText}>Snow Day</Text>

              {value ? (
                <View style={[styles.badge, { backgroundColor: "#e2e3e5" }]}>
                  <Text style={[styles.badgeText, { color: "#383d41" }]}>
                    Close
                  </Text>

                  <Ionicons
                    name="md-checkmark"
                    size={12}
                    style={{ paddingLeft: 8, lineHeight: 0 }}
                  />
                </View>
              ) : (
                <View style={[styles.badge, { backgroundColor: "#d4edda" }]}>
                  <Text style={[styles.badgeText, { color: "#155724" }]}>
                    Open
                  </Text>

                  <Ionicons
                    name="md-checkmark"
                    size={12}
                    style={{ paddingLeft: 8, lineHeight: 0 }}
                  />
                </View>
              )}
            </View>
            <Text style={styles.headerText}>My School</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Snow piling up? Tap the button to call a snow day!
            </Text>
            <View></View>
          </View>
        </View>
      </View>
    </SimpleAnimation>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "#6791aa",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 10
  },
  apiWrapper: {
    marginTop: 20,
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  text: {
    fontSize: 16,
    lineHeight: 23,
    color: "#444a52",
    marginBottom: 20
  },
  smallText: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#bfbfbf"
  },
  snowdayWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  badge: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50
  },
  badgeText: {
    lineHeight: 0,
    fontSize: 10
  },
  outerWrapper: {
    marginTop: 0,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },

  wrapper: {
    padding: 20
  }
});

export default Card;
