
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
         <Route path="articles" element={<Articles />} />
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
