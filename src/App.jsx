import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/input/InputContainer";
import OutputContainer from "./components/output/OutputContainer";
import { calculateFCFS } from "./algorithms/fcfs";
import { calculateSJF } from "./algorithms/sjf";
import { calculateSTRF } from "./algorithms/strf";
import { calculateRR } from "./algorithms/rr";
import { calculateNPP } from "./algorithms/npp";
import { calculatePP } from "./algorithms/pp";
import Button from "./components/Button";

const App = () => {
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [arrivalTimes, setArrivalTimes] = useState([]);
  const [burstTimes, setBurstTimes] = useState([]);
  const [additionalInput, setAdditionalInput] = useState(null);
  const [output, setOutput] = useState({ ganttChart: [], table: [] });

  const handleSolve = () => {
    let result;
    console.log("Algorithm:", algorithm);
    console.log("Arrival Times:", arrivalTimes);
    console.log("Burst Times:", burstTimes);
    console.log("Additional Input:", additionalInput);

    switch (algorithm) {
      case "FCFS":
        result = calculateFCFS(arrivalTimes, burstTimes);
        break;
      case "SJF":
        result = calculateSJF(arrivalTimes, burstTimes);
        break;
      case "STRF":
        result = calculateSTRF(arrivalTimes, burstTimes);
        break;
      case "RR":
        result = calculateRR(arrivalTimes, burstTimes, additionalInput);
        break;
      case "NPP":
        result = calculateNPP(arrivalTimes, burstTimes, additionalInput);
        break;
      case "PP":
        result = calculatePP(arrivalTimes, burstTimes, additionalInput);
        break;
      default:
        result = { ganttChart: [], table: [] };
    }

    console.log("Result:", result);
    setOutput(result);
  };

  return (
    <>
      <div className="app-name">
        <p className="title">cpu scheduling simulator</p>
        <p className="description">
          This is a visualizer for scheduling algorithms.
        </p>
      </div>

      <div className="input-box">
        <InputContainer
          setAlgorithm={setAlgorithm}
          setArrivalTimes={setArrivalTimes}
          setBurstTimes={setBurstTimes}
          setAdditionalInput={setAdditionalInput}
          algorithm={algorithm}
        />
        <button className="btn" onClick={handleSolve}>
          Solve
        </button>

        {output.ganttChart.length !== 0 && output.table.length && (
          <p className="resultblock">result</p>
        )}

        <OutputContainer ganttChart={output.ganttChart} table={output.table} />
      </div>
    </>
  );
};

export default App;
