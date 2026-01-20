
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
<Navbar/>
      <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home />} /></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      </BrowserRouter>

  );
}
