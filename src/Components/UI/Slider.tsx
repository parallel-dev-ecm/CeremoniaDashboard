import React, { useState, useEffect, useRef } from "react";
import { FIREBASE_OBJECTS } from "../../firebase";

import gsap from "gsap";

type Props = {
  collectionField: string;
};

function Slider(props: Props) {
  const [sliderValue, setSliderValue] = useState(0);

  const submitButton = useRef<HTMLButtonElement>(null);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
    const dataToUpload = { [props.collectionField]: sliderValue };

    await FIREBASE_OBJECTS.updateData(dataToUpload, "slider-controls");
    console.log(dataToUpload);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToUpload = { [props.collectionField]: sliderValue };
    console.log(dataToUpload);

    await FIREBASE_OBJECTS.updateData(dataToUpload, "slider-controls");
    console.log("Data updated successfully");
  };

  useEffect(() => {
    const fetchData = async () => {
      const docData = await FIREBASE_OBJECTS.readData("slider-controls");
      if (docData) {
        setSliderValue(docData[props.collectionField]);
      } else {
        console.log("No data found");
      }
    };
    fetchData();
  }, [props.collectionField]);

  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="py-4   rounded  px-4" id="sliderId">
          <label htmlFor="value" className="block text-black text-sm font-bold">
            {props.collectionField.toUpperCase() + ":    "}
            {sliderValue}
          </label>
          <br />

          <input
            type="range"
            name="value"
            min="0"
            max="100"
            className="block w-full h-0.5  my-0 appearance-none rounded  bg-black "
            value={sliderValue}
            onChange={handleChange}
          />
          <br />
        </div>
      </form>
    </div>
  );
}

export default Slider;
