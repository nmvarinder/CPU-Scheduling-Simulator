// src/components/input/ArrivalTimeInput.jsx
import React from "react";

const ArrivalTimeInput = ({ setArrivalTimes }) => {
  return (
    <div className="arrival-time-input">
      <label>Arrival Times</label>
      <input
        type="text"
        onChange={(e) => setArrivalTimes(e.target.value.split(" "))}
        placeholder="eg. 0 2 2 1"
      />
    </div>
  );
};

export default ArrivalTimeInput;
