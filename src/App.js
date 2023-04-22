import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import PlanetMain from "./components/PlanetMain";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="app-container svg-background">
      <Router>
      <Header />
        <Routes>
        <Route path="/" element={<Navigate to="/planets/earth" />} />
        <Route path="/planets/:activePlanet" element={<PlanetMain />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
