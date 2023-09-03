import React from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import PlanetMain from "./components/PlanetMain";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="APP-MAIN grid svg-background bg-darkblue bg-cover h-screen text-white">
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/planets/earth" />} />
        <Route path="/planets/:activePlanet" element={<PlanetMain />} />
        <Route path="/planets/*" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
