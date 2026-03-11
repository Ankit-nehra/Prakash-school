import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admission from "../pages/Admission";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function ScrollToTopHandler() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth" for smooth scrolling
  }, [pathname]);

  return null; // nothing to render
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTopHandler /> {/* handles scroll */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;