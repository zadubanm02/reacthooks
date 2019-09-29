import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
