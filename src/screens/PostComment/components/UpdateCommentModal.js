import React from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Text, Button } from "@rneui/themed";
import { Colors } from "../../../theme/colors";

const UpdateCommentModal = ({ visible, onClose, postComment }) => {
  const { body: comment } = postComment || {};
  const validationSchema = Yup.object().shape({
    comment: Yup.string()
      .required("Comment is required")
      .min(5, "Comment must be at least 5 characters long"),
  });

  const formik = useFormik({
    initialValues: { comment: comment || "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted Comment:", values.comment);
      onClose();
    },
  });

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.popupContainer}>
          <Text style={styles.title}>Update Comment</Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={4}
            placeholder="Enter your comment"
            onChangeText={formik.handleChange("comment")}
            onBlur={formik.handleBlur("comment")}
            value={formik.values.comment}
          />
          {formik.touched.comment && formik.errors.comment && (
            <Text style={styles.errorText}>{formik.errors.comment}</Text>
          )}

          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.cancelButton}
              title="Cancel"
              titleStyle={[styles.buttonTitle, { color: Colors.primary }]}
              onPress={onClose}
            />
            <Button
              buttonStyle={styles.submitButton}
              title="Submit"
              titleStyle={styles.buttonTitle}
              onPress={formik.handleSubmit}
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
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
    paddingHorizontal: 24,
  },
  submitButton: {
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default UpdateCommentModal;
