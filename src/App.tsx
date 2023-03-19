import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

import CenteredNav from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Sidebar */}
        <CenteredNav />
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
