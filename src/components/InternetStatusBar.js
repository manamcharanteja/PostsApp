import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image, Text } from "@rneui/themed";
import CanShow from "./CanShow";
import React from "react";
import useNetwork from "../hooks/useNetwork";
import { Colors } from "../theme/colors";

const noInternet = require("../assets/images/png/no-internet.png");

const InternetStatusBar = () => {
  const { isConnected, checkNetworkStatus } = useNetwork();
  return (
    <CanShow show={!isConnected}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image source={noInternet} style={{ width: 30, height: 30 }} />
          <Text style={styles.statusText}>No Internet</Text>
        </View>
        <TouchableOpacity onPress={checkNetworkStatus}>
          <Text style={styles.statusText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </CanShow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red500,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: Colors.white,
    fontSize: 12,
    color: Colors.white,
    marginLeft: 10,
  },
  retryText: {
    color: Colors.primary,
  },
});

export default InternetStatusBar;
