import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_ZmlybS10YWhyLTkyLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
