import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Toast, { ToastProvider } from "react-native-toast-notifications";
import { store } from "./src/store/store";
import InternetStatusBar from "./src/components/InternetStatusBar";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider
        placement="top"
        offset={50}
        transitionDuration={100}
        duration={2000}
      >
        {/* <ThemeProvider theme={Theme}> */}
        <Provider store={store}>
          <InternetStatusBar />
          <AppNavigator />
        </Provider>
        {/* </ThemeProvider> */}
      </ToastProvider>
      <Toast placement="top" ref={(ref) => (global.toast = ref)} />
    </SafeAreaProvider>
  );
};

export default App;
