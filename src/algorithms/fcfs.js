export const calculateFCFS = (arrivalTimes, burstTimes) => {
  let ganttChart = [];
  let table = [];
  let currentTime = 0;

  for (let i = 0; i < arrivalTimes.length; i++) {
    let startTime = Math.max(currentTime, arrivalTimes[i]);
    let endTime = startTime + parseInt(burstTimes[i]);
    // console.log(typeof startTime);
    // console.log(typeof burstTimes[i]);
    // console.log(typeof endTime);
    // console.log("start time" + startTime);
    // console.log("end time" + endTime);

    ganttChart.push({ job: `Job ${i + 1}`, start: startTime, end: endTime });

    let finishTime = endTime;
    console.log("finish time" + finishTime);
    let turnaroundTime = finishTime - arrivalTimes[i];
    let waitingTime = startTime - arrivalTimes[i];

    table.push({
      job: `Job ${i + 1}`,
      arrivalTime: arrivalTimes[i],
      burstTime: burstTimes[i],
      finishTime: finishTime,
      turnaroundTime: turnaroundTime,
      waitingTime: waitingTime,
    });
    currentTime = endTime;
  }

  return { ganttChart, table };
};
