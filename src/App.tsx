import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import { CenteredNav } from "./Components/Navbar";
import gsap from "gsap";

import { useEffect, useRef } from "react";

function App() {
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navBarRef.current,
      { y: -1000 },
      { y: 1, delay: 0.1, duration: 2 }
    );
  });
  return (
    <>
      <BrowserRouter>
        {/* Sidebar */}
        <CenteredNav ref={navBarRef} />
        {/* Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
