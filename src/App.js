import React from "react";
import GlobalStyle from "theme/GlobalStyle";
import { Provider } from "react-redux";
import store from "store";
import MainView from "view/MainView";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainView />
    </Provider>
  );
};

export default App;
