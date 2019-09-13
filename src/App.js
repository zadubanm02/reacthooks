import React from "react";
import "./App.css";
import PrispevkyCards from "./components/PrispevkyCards";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <PrispevkyCards />
    </div>
  );
}

export default App;
