import React, { useState } from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../theme/colors";
import HeaderView from "../../components/HeaderView";
import ArrowIcon from "../../assets/images/svg/ArrowIcon";
import { useGetPostsQuery } from "../../services/account.api";
import Loader from "../../components/Loader";
import PostCard from "./components/PostCard";
import { useToast } from "react-native-toast-notifications";

const PostListScreen = ({ navigation }) => {
  const toast = useToast();
  const [postsToShow, setPostsToShow] = useState(20);
  const { data: posts = [], isLoading, error } = useGetPostsQuery();

  const loadMorePosts = () => {
    if (posts?.length > postsToShow) {
      setPostsToShow((prev) => prev + 20);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return toast.show("Something went wrong", { type: "danger" });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
      <HeaderView
        leftContent={<ArrowIcon />}
        middleText={"View Posts"}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.scrollView}>
        <FlatList
          data={posts?.slice(0, postsToShow)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostCard postDetails={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.1}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostListScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginBottom: Platform.OS === "ios" ? -30 : 0,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
});
