// src/components/input/AlgorithmSelector.jsx
import React from "react";

const AlgorithmSelector = ({ setAlgorithm }) => {
  return (
    <div>
      <label>Algorithm</label>
      <select onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="FCFS">First Come First Serve, FCFS</option>
        <option value="SJF">Shortest Job First, SJF (Non-Preemptive)</option>
        <option value="STRF">Shortest Time Remaining First, SRTF</option>
        <option value="RR">Round Robin, RR</option>
        <option value="NPP">Priority (Non-Preemptive), NPP</option>
        <option value="PP">Priority (Preemptive), PP</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
