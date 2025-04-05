import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../../../constants/screens.const";

const PostCard = ({ postDetails }) => {
  const { navigate } = useNavigation();
  const { title, body } = postDetails || {};
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.6}
      onPress={() => navigate(SCREENS.POST_COMMENT, { postDetails })}
    >
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.body} numberOfLines={2}>
        {body}
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
