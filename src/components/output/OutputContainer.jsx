import React from "react";
import GanttChart from "./GanttChart";
import OutputTable from "./OutputTable";

const OutputContainer = ({ ganttChart, table }) => {
  // console.log("output: ganttChart + table ");
  return (
    <div>
      <GanttChart data={ganttChart} />
      <OutputTable data={table} />
    </div>
  );
};

export default OutputContainer;
