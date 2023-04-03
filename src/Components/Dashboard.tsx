import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { FIREBASE_OBJECTS } from "../firebase";
import Navbar from "./Navbar.jsx";
import Slider from "./UI/Slider";
// @ts-ignore
import ToggleField from "./UI/ToggleField";

type Props = {};

function Dashboard({}: Props) {
  useEffect(() => {
    // FIREBASE_OBJECTS.updateData({ x: 1, travis: true });
  }, []);

  return (
    <>
      <br />
      <div className="dashBoard">
        <div className=" min-h-screen ">
          <div className="firstSliderRow container md:flex  mx-auto px-4  sm:px-6 lg:px-8  ">
            <Slider collectionField="Type" />
            <Slider collectionField="Scale" />
            <Slider collectionField="Tempo" />
          </div>
          <br />
          <br />
          <div className="toggleContainer border  p-6  container mx-auto w-2/4 ">
            <ToggleField />
            <br />
            <ToggleField />
            <br />
            <ToggleField />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
