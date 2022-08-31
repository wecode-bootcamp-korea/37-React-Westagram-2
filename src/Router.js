import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Main />} />
      </Router>
    </BrowserRouter>
  );
}

export default Router;
