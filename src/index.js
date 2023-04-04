import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
function tick() {
  root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  );
}
setInterval(tick, 1000);

reportWebVitals();
