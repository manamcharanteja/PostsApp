import React from "react";
import { View } from "react-native";

const Spacing = ({ size = 0, hr = false }) => {
  return hr ? (
    <View style={{ width: size }} />
  ) : (
    <View style={{ marginTop: size }} />
  );
};

export default Spacing;
