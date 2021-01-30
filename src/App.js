import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
