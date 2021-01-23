import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
