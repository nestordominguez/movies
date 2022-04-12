import React from 'react';
import Router from './router';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import "@fontsource/space-grotesk";

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
