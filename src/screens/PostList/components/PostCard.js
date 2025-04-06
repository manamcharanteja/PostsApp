import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../../../constants/screens.const";

const PostCard = ({ postDetails }) => {
  const { navigate } = useNavigation();
  const { title, body } = postDetails || {};
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate(SCREENS.POST_COMMENT, { postDetails })}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body} numberOfLines={isExpanded ? 0 : 2}>
          {body}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleExpand} style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>
          {isExpanded ? "View Less" : "View More"}
        </Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.gray700,
  },
  body: {
    fontSize: 16,
    color: Colors.gray500,
  },
  viewMoreButton: {
    marginTop: 8,
    alignSelf: "flex-end",
  },
  viewMoreText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});

export default React.memo(PostCard);
