import {} from "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import "./scss/global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
