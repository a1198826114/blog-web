import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./views/App";
import { createRoot } from "react-dom/client";
import './index.less'
import 'lib-flexible' //这是用来适配的
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
