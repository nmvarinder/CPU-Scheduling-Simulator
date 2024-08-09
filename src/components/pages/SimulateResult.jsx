import React, { useState } from "react";
import Header from "../compo/Header";

import InputContainer from "../input/InputContainer";
import OutputContainer from "../output/OutputContainer";
import { calculateFCFS } from "../../algorithms/fcfs";
import { calculateSJF } from "../../algorithms/sjf";
import { calculateSTRF } from "../../algorithms/strf";
import { calculateRR } from "../../algorithms/rr";
import { calculateNPP } from "../../algorithms/npp";
import { calculatePP } from "../../algorithms/pp";

const SimulateResult = () => {
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
      <Header />

    
        <div className="page-name">Simulate</div>

        <div className="sr-container">
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
          </div>
          <div className="output-box">
            <OutputContainer table={output.table} />
          </div>
        </div>

    </>
  );
};

export default SimulateResult;
