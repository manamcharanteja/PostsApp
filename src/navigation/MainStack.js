import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SCREENS from "../constants/screens.const";
import PostListScreen from "../screens/PostList/PostListScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import PostCommentScreen from "../screens/PostComment/PostCommentScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.POST_LIST} component={PostListScreen} />
      <Stack.Screen name={SCREENS.POST_COMMENT} component={PostCommentScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
