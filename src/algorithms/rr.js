export const calculateRR = (arrivalTimes, burstTimes, timeQuantum) => {
  let ganttChart = [];
  let table = [];
  let currentTime = 0;
  let queue = arrivalTimes.map((time, index) => ({
    arrivalTime: time,
    burstTime: burstTimes[index],
    remainingTime: burstTimes[index],
    job: `Job ${index + 1}`,
  }));

  while (queue.length > 0) {
    let currentJob = queue.shift();
    let executionTime = Math.min(timeQuantum, currentJob.remainingTime);
    let startTime = currentTime;
    let endTime = startTime + executionTime;

    ganttChart.push({ job: currentJob.job, start: startTime, end: endTime });

    currentJob.remainingTime -= executionTime;
    currentTime = endTime;

    if (currentJob.remainingTime > 0) {
      queue.push(currentJob);
    } else {
      let finishTime = endTime;
      let turnaroundTime = finishTime - currentJob.arrivalTime;
      let waitingTime = turnaroundTime - currentJob.burstTime;

      table.push({
        job: currentJob.job,
        arrivalTime: currentJob.arrivalTime,
        burstTime: currentJob.burstTime,
        finishTime: finishTime,
        turnaroundTime: turnaroundTime,
        waitingTime: waitingTime,
      });
    }
  }

  return { ganttChart, table };
};
