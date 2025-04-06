import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ArrowRightIcon from "../assets/images/svg/ArrowRightIcon";
import { Colors } from "../theme/colors";

const HeaderWithAction = ({
  title,
  actionText = "View All",
  onViewBtnPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onViewBtnPress} style={styles.actionContainer}>
        <Text style={styles.actionText}>{actionText}</Text>
        <ArrowRightIcon size={16} strokeColor={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.gray900,
  },
  actionContainer: {
    flexDirection: "row",
  },
  actionText: {
    color: Colors.primary,
    marginRight: 4,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default HeaderWithAction;
