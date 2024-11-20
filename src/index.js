import React from "react";
import ReactDOM from "react-dom/client";
import { PookieContextProvider } from "./Context/PookieContext.js";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PookieContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PookieContextProvider>
);
