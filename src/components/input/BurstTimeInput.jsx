// src/components/input/BurstTimeInput.jsx
import React from "react";

const BurstTimeInput = ({ setBurstTimes }) => {
  return (
    <div>
      <label>Burst Times</label>
      <input
        type="text"
        onChange={(e) => setBurstTimes(e.target.value.split(" "))}
        placeholder="eg. 0 3 4 1"
      />
    </div>
  );
};

export default BurstTimeInput;
