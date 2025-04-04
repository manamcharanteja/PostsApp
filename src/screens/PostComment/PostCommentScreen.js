import { Text } from "@rneui/themed";
import React from "react";
import { Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../theme/colors";
import HeaderView from "../../components/HeaderView";

const PostCommentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.gray100} barStyle="dark-content" />
      <HeaderView leftContent={<Text>Left</Text>} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <Text>Wokring</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostCommentScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    marginBottom: Platform.OS === "ios" ? -30 : 0,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
});
