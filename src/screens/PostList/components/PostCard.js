import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../theme/colors";

const PostCard = ({ postDetails }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.6}>
      <Text style={styles.title} numberOfLines={1}>
        {postDetails?.title}
      </Text>
      <Text style={styles.body} numberOfLines={2}>
        {postDetails?.body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: Colors.gray300,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    rowGap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.gray700,
  },
  body: {
    fontSize: 16,
    color: Colors.gray500,
  },
});

export default PostCard;
