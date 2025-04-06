import { Text } from "@rneui/themed";
import React from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../theme/colors";
import HeaderView from "../../components/HeaderView";
import { useGetPostsQuery } from "../../services/account.api";
import Loader from "../../components/Loader";
import PostCard from "../PostList/components/PostCard";
import HeaderWithAction from "../../components/HeaderWithAction";
import DashLine from "../../components/DashLine";
import SCREENS from "../../constants/screens.const";
import { useToast } from "react-native-toast-notifications";
import Spacing from "../../components/Spacing";

const HomeScreen = ({ navigation }) => {
  const toast = useToast();
  const { data: posts = [], isLoading, error } = useGetPostsQuery();

  if (isLoading) return <Loader />;
  if (error) return toast.show("Something went wrong", { type: "danger" });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
      <HeaderView
        middleText={<Text style={styles.headerTitle}>Posts Feed</Text>}
      />
      <View style={styles.scrollView}>
        <Spacing size={16} />
        <HeaderWithAction
          title="Latest Posts"
          onViewBtnPress={() => navigation.navigate(SCREENS.POST_LIST)}
        />
        <FlatList
          data={posts.slice(0, 4)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostCard postDetails={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<DashLine />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
  },
});
