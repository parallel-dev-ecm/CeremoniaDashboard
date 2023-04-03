import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { FIREBASE_OBJECTS } from "../firebase";
import gsap from "gsap";
import Slider from "./UI/Slider";
// @ts-ignore
import ToggleField from "./UI/ToggleField";

type Props = {};

function Dashboard({}: Props) {
  const slidersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      slidersRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, delay: 0.09 }
    );
  });

  return (
    <>
      <br />
      <div className="dashBoard">
        <div className=" min-h-screen ">
          <div
            className="firstSliderRow container md:flex  mx-auto px-4  sm:px-6 lg:px-8  "
            ref={slidersRef}
          >
            <Slider collectionField="Type" />
            <Slider collectionField="Scale" />
            <Slider collectionField="Tempo" />
          </div>
          <br />
          <br />
          <div className="toggleContainer border  p-6  container mx-auto w-2/4 ">
            <ToggleField collectionField="shader-type" />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
