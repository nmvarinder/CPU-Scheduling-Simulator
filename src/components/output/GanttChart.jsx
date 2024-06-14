import React from "react";

const GanttChart = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div>
      <h3>Gantt Chart</h3>
      <div style={{ display: "flex" }}>
        {data.map((segment, index) => (
          <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
            <div>{segment.job}</div>
            <div>
              {segment.start} - {segment.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
