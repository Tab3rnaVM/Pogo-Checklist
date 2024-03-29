import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dex from "./components/Dex";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router basename="/Pogo-Checklist">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dex" element={<Dex />} />
          <Route exact path="/shiny" element={<Dex />} />
          <Route exact path="/lucky" element={<Dex />} />
          <Route exact path="/perfect" element={<Dex />} />
          <Route exact path="/shadow" element={<Dex />} />
          <Route exact path="/purified" element={<Dex />} />
          <Route exact path="/event" element={<Dex />} />
          <Route exact path="/mega" element={<Dex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>Está página no existe</h1>;
}

export default App;
