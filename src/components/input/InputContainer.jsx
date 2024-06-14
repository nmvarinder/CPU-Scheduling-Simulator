import React, { useEffect } from "react";
import AlgorithmSelector from "./AlgorithmSelector";
import ArrivalTimeInput from "./ArrivalTimeInput";
import BurstTimeInput from "./BurstTimeInput";
import AdditionalInput from "./AdditionalInput";

const InputContainer = ({
  setAlgorithm,
  setArrivalTimes,
  setBurstTimes,
  setAdditionalInput,
  algorithm,
}) => {
  useEffect(() => {
    setAdditionalInput(null); // Reset additional input on algorithm change
  }, [algorithm, setAdditionalInput]);

  return (
    <div>
      <AlgorithmSelector setAlgorithm={setAlgorithm} />
      <ArrivalTimeInput setArrivalTimes={setArrivalTimes} />
      <BurstTimeInput setBurstTimes={setBurstTimes} />
      {["RR", "NPP", "PP"].includes(algorithm) && (
        <AdditionalInput
          setAdditionalInput={setAdditionalInput}
          algorithm={algorithm}
        />
      )}
    </div>
  );
};

export default InputContainer;
