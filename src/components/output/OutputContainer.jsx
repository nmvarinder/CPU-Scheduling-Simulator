import React from "react";
import OutputTable from "./OutputTable";

const OutputContainer = ({ table }) => {
  return (
    <div className="output-box-container">
      <OutputTable data={table} />
    </div>
  );
};

export default OutputContainer;
