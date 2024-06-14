import React from "react";

const OutputTable = ({ data }) => {
  if (data.length === 0) {
    return null;
  }
  return (
    <div>
      <h3>Output Table</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Job</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Finish Time</th>
            <th>Turnaround Time</th>
            <th>Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.job}</td>
              <td>{row.arrivalTime}</td>
              <td>{row.burstTime}</td>
              <td>{row.finishTime}</td>
              <td>{row.turnaroundTime}</td>
              <td>{row.waitingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutputTable;
