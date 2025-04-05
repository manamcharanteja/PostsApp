import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/colors";

const HeaderView = ({
  leftContent,
  middleText,
  rightContent,
  containerStyle,
  onLeftIconPress,
  onRightIconPress,
  middleTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.leftContent} onPress={onLeftIconPress}>
        {leftContent}
      </TouchableOpacity>
      <View style={styles.middleContent}>
        <Text style={[styles.middleText, middleTextStyle]}>{middleText}</Text>
      </View>
      <TouchableOpacity style={styles.rightContent} onPress={onRightIconPress}>
        {rightContent}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 16,
  },
  leftContent: {
    flex: 1,
    alignItems: "flex-start",
  },
  middleContent: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  middleText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
  },
});
