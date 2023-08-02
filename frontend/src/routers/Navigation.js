import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

console.log(Routes);

export function Navigation() {
  return (
    <Router>
      <h2>Navigation</h2>
    </Router>
  );
}
