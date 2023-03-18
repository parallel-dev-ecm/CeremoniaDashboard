import React, { useState, useEffect } from "react";
import { FIREBASE_OBJECTS } from "../../firebase";

interface SliderData {
  [key: string]: any;
}

type Props = {
  collectionField: string;
};

function Slider(props: Props) {
  const [data, setData] = useState<SliderData>({});
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
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
        setData(docData);
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
        <div className="py-4">
          <label htmlFor="value" className="block text-gray-700 font-bold">
            {props.collectionField}
          </label>
          <input
            type="range"
            name="value"
            min="0"
            max="100"
            className="block w-full my-2"
            value={sliderValue}
            onChange={handleChange}
          />
          <p className="text-center">{sliderValue}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  text-center"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Slider;
