// src/components/input/AdditionalInputs.jsx
import React from "react";

const AdditionalInputs = ({ setAdditionalInput, algorithm }) => {
  return (
    <div>
      {algorithm === "RR" && (
        <>
          <label>Time Quantum</label>
          <input
            type="text"
            onChange={(e) => setAdditionalInput(e.target.value)}
            placeholder="eg. 2"
          />
        </>
      )}
      {["NPP", "PP"].includes(algorithm) && (
        <>
          <label>Priorities</label>
          <input
            type="text"
            onChange={(e) => setAdditionalInput(e.target.value.split(" "))}
            placeholder="eg. 1 2 3 4"
          />
        </>
      )}
    </div>
  );
};

export default AdditionalInputs;
