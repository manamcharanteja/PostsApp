import React from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../theme/colors";
import HeaderView from "../../components/HeaderView";
import ArrowIcon from "../../assets/images/svg/ArrowIcon";
import { useViewPostCommentsQuery } from "../../services/account.api";
import { useToast } from "react-native-toast-notifications";
import CommentsCard from "./components/CommentsCard";
import CanShow from "../../components/CanShow";
import CommentsCardShimmer from "./components/CommentsCardShimmer";

const PostCommentScreen = ({ navigation, route }) => {
  const { postDetails } = route.params || {};
  const toast = useToast();
  const {
    data: postComments = [],
    isLoading,
    error,
  } = useViewPostCommentsQuery({
    postId: postDetails?.id,
  });
  console.log(postComments, "postComments");

  if (error) return toast.show("Something went wrong", { type: "danger" });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
      <HeaderView
        leftContent={<ArrowIcon />}
        middleText={"View Comments"}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.scrollView}>
        <CanShow show={postComments && postComments?.length !== 0}>
          <FlatList
            data={postComments}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={({ item }) => <CommentsCard postComment={item} />}
            showsVerticalScrollIndicator={false}
          />
        </CanShow>
        <CanShow show={isLoading}>
          <CommentsCardShimmer />
        </CanShow>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(PostCommentScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginBottom: Platform.OS === "ios" ? -30 : 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
