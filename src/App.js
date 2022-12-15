import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing_page from "./Landing-page/landing-page";
import Postview from "./postview/postview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/posts" element={<Postview />} />
          <Route path="/*" element={<div>Error 404 ! Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
