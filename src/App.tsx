import { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen grid grid-cols-1  lg:grid-cols-6">
          {/* Sidebar */}
          <div className=" fixed col-span-1 p-8 border-r w-full h-full overflow-y-scroll lg:static">
            <Navbar />
          </div>
          {/* Content */}
          <div className="col-span-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="About" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
