import React from "react";
import { StyleSheet, View } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { Colors } from "../../../theme/colors";

const PostCardShimmer = ({ count = 4 }) => {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <View style={styles.card}>
          <ShimmerPlaceholder
            style={styles.titleShimmer}
            shimmerColors={[Colors.gray200, Colors.gray300, Colors.gray200]}
          />
          <View style={styles.bodyContainer}>
            <ShimmerPlaceholder
              style={styles.bodyLine1}
              shimmerColors={[Colors.gray200, Colors.gray300, Colors.gray200]}
            />
            <ShimmerPlaceholder
              style={styles.bodyLine2}
              shimmerColors={[Colors.gray200, Colors.gray300, Colors.gray200]}
            />
          </View>
          <View style={styles.viewMoreContainer}>
            <ShimmerPlaceholder
              style={styles.viewMoreShimmer}
              shimmerColors={[Colors.gray200, Colors.gray300, Colors.gray200]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: Colors.gray300,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    rowGap: 4,
  },
  bodyContainer: {
    marginBottom: 4,
  },
  titleShimmer: {
    height: 20,
    width: "80%",
    borderRadius: 4,
    marginBottom: 4,
  },
  bodyLine1: {
    height: 16,
    width: "100%",
    borderRadius: 4,
    marginBottom: 8,
  },
  bodyLine2: {
    height: 16,
    width: "60%",
    borderRadius: 4,
  },
  viewMoreContainer: {
    marginTop: 8,
    alignSelf: "flex-end",
  },
  viewMoreShimmer: {
    height: 16,
    width: 80,
    borderRadius: 4,
  },
});

export default PostCardShimmer;
