import { useEffect, useState } from "react";
import { FIREBASE_OBJECTS } from "../firebase";
import Slider from "./UI/Slider";

type Props = {};

function Dashboard({}: Props) {
  useEffect(() => {
    // FIREBASE_OBJECTS.updateData({ x: 1, travis: true });
  }, []);

  return (
    <>
      <Slider docId="slider-controls" collectionField = 'travis_scale' />
    </>
  );
}

export default Dashboard;
