import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { FIREBASE_OBJECTS } from "../firebase";
import Navbar from "./Navbar.jsx";
import Slider from "./UI/Slider";

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
          <div className="firstSliderRow container lg:flex mx-auto px-4  sm:px-6 lg:px-8  ">
            <Slider collectionField="value" />
            <Slider collectionField="test1" />
            <Slider collectionField="test2" />
            <Slider collectionField="test1" />
            <Slider collectionField="value" />
            <Slider collectionField="test2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
