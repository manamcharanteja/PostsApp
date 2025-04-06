import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserIcon from "../../../assets/images/svg/UserIcon";
import EmailIcon from "../../../assets/images/svg/EmailIcon";
import CommentIcon from "../../../assets/images/svg/CommentIcon";
import { Colors } from "../../../theme/colors";
import { Button } from "@rneui/themed";
import EditIcon from "../../../assets/images/svg/EditIcon";
import Spacing from "../../../components/Spacing";
import UpdateCommentModal from "./UpdateCommentModal";

const CommentsCard = ({ postComment }) => {
  const { name, email, body: comment } = postComment || {};
  const [isCoommentVisible, setIsCommentVisible] = React.useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <UserIcon />
        <Text style={styles.nameStyle}>{name}</Text>
      </View>
      <View style={styles.infoRow}>
        <EmailIcon />
        <Text style={styles.emailStyle}>{email}</Text>
      </View>
      <View style={styles.infoRow}>
        <CommentIcon />
        <Text style={styles.commentStyle}>{comment}</Text>
      </View>
      <Spacing size={10} />
      <Button
        icon={<EditIcon style={{ marginRight: 8 }} />}
        iconContainerStyle={{ marginLeft: 10 }}
        buttonStyle={styles.editText}
        title="Edit"
        titleStyle={{ color: Colors.primary }}
        onPress={() => setIsCommentVisible(true)}
      />
      <UpdateCommentModal
        visible={isCoommentVisible}
        postComment={postComment}
        onClose={() => setIsCommentVisible(false)}
      />
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
  icon: {
    marginRight: 10,
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
});

export default React.memo(CommentsCard);
