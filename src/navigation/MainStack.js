import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Suspense, lazy } from "react";
import SCREENS from "../constants/screens.const";
import Loader from "../components/Loader";

// Lazy load the screens
const HomeScreen = lazy(() => import("../screens/Home/HomeScreen"));
const PostListScreen = lazy(() => import("../screens/PostList/PostListScreen"));
const PostCommentScreen = lazy(() => import("../screens/PostComment/PostCommentScreen"));

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Suspense fallback={<Loader />}> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.POST_LIST} component={PostListScreen} />
        <Stack.Screen name={SCREENS.POST_COMMENT} component={PostCommentScreen} />
      </Stack.Navigator>
    </Suspense>
  );
};

export default MainStack;
