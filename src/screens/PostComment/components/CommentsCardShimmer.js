import React from "react";
import { View, StyleSheet } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { Colors } from "../../../theme/colors";
import Spacing from "../../../components/Spacing";

const CommentsCardShimmer = ({ count = 4 }) => {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <ShimmerPlaceholder style={styles.iconShimmer} />
            <ShimmerPlaceholder style={styles.nameShimmer} />
          </View>
          <View style={styles.infoRow}>
            <ShimmerPlaceholder style={styles.iconShimmer} />
            <ShimmerPlaceholder style={styles.emailShimmer} />
          </View>
          <View style={styles.infoRow}>
            <ShimmerPlaceholder style={styles.iconShimmer} />
            <ShimmerPlaceholder style={styles.commentShimmer} />
          </View>
          <Spacing size={10} />
          <ShimmerPlaceholder style={styles.buttonShimmer} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.gray200,
  },
  infoRow: {
    flexDirection: "row",
    marginVertical: 8,
    columnGap: 10,
    width: "90%",
  },
  nameStyle: {
    fontSize: 16,
    color: Colors.gray900,
    fontWeight: "bold",
  },
  emailStyle: {
    fontSize: 15,
    color: Colors.gray900,
    fontWeight: "semibold",
  },
  commentStyle: {
    fontSize: 15,
    color: Colors.gray600,
    fontWeight: "semibold",
  },
  editText: {
    fontSize: 16,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
    alignSelf: "flex-end",
    paddingHorizontal: 16,
  },
  iconShimmer: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  nameShimmer: {
    width: 150,
    height: 16,
    borderRadius: 4,
  },
  emailShimmer: {
    width: 200,
    height: 15,
    borderRadius: 4,
  },
  commentShimmer: {
    width: "80%",
    height: 15,
    borderRadius: 4,
  },
  buttonShimmer: {
    width: 80,
    height: 36,
    borderRadius: 25,
    alignSelf: "flex-end",
  },
});

export default CommentsCardShimmer;
