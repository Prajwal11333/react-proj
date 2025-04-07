import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Basics from "./pages/Tutorials/Basics";
import FamilySigns from "./pages/Tutorials/FamilySigns";
import EmotionsExpressions from "./pages/Tutorials/EmotionsExpressions";
import Quiz from "./pages/Quiz";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import React from "react";

const element = ReactDom.createRoot(document.getElementbyId('root'));
 function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials/basics" element={<Basics />} />
        <Route path="/tutorials/family-signs" element={<FamilySigns />} />
        <Route path="/tutorials/emotions-expressions" element={<EmotionsExpressions />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

element.render(<App></App>)