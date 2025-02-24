import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "../src/Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedProjectPage from "./Pages/FeaturedProjectPage/FeaturedProjectPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Skills />
                <Works />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:id" element={<FeaturedProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
