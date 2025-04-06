import React from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Text, Button, Divider } from "@rneui/themed";
import { Colors } from "../../../theme/colors";
import { useUpdatePostCommentMutation } from "../../../services/account.api";
import CanShow from "../../../components/CanShow";
import DashLine from "../../../components/DashLine";
import Spacing from "../../../components/Spacing";

const UpdateCommentModal = ({ visible, onClose, postComment }) => {
  const { id: commentId, name, body: comment } = postComment || {};
  const [updatePostComment, { isLoading, error }] =
    useUpdatePostCommentMutation();

  const validationSchema = Yup.object().shape({
    comment: Yup.string()
      .required("Comment is required")
      .min(5, "Comment must be at least 5 characters long"),
  });

  const formik = useFormik({
    initialValues: { comment: comment || "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await updatePostComment({ commentId, body: values.comment }).unwrap();
        console.log("Submitted Comment:", values.comment);
        onClose();
      } catch (err) {
        console.error("Failed to update comment: ", err);
      }
    },
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.popupContainer}>
          <Text style={styles.postName}>{name}</Text>
          <Divider color={Colors.gray300} width={1} />
          <Spacing size={12} />
          <Text style={styles.title}>Update Comment</Text>
          <Spacing size={12} />
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Enter your comment"
            onChangeText={formik.handleChange("comment")}
            onBlur={formik.handleBlur("comment")}
            value={formik.values.comment}
          />
          <CanShow show={formik.touched.comment && formik.errors.comment}>
            <Text style={styles.errorText}>{formik.errors.comment}</Text>
          </CanShow>
          <CanShow show={error}>
            <Text style={styles.errorText}>Failed to update comment.</Text>
          </CanShow>
          <Spacing size={6} />
          <Divider color={Colors.gray300} width={1} />
          <Spacing size={12} />
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.cancelButton}
              title="Cancel"
              titleStyle={[styles.buttonTitle, { color: Colors.primary }]}
              onPress={handleClose}
            />
            <Button
              buttonStyle={styles.submitButton}
              title="Submit"
              titleStyle={styles.buttonTitle}
              onPress={formik.handleSubmit}
              loading={isLoading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
  },
  popupContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    marginHorizontal: 16,
    padding: 24,
  },
  postName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.primary,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textInput: {
    borderColor: Colors.gray200,
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cancelButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
    marginRight: 10,
    paddingHorizontal: 40,
  },
  submitButton: {
    paddingHorizontal: 40,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default UpdateCommentModal;
