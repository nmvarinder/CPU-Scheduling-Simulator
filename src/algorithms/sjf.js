export const calculateSJF = (arrivalTimes, burstTimes) => {
  let ganttChart = [];
  let table = [];
  let currentTime = 0;
  let jobs = arrivalTimes.map((time, index) => ({
    arrivalTime: time,
    burstTime: burstTimes[index],
    job: `Job ${index + 1}`,
  }));
  let completedJobs = [];

  while (jobs.length > 0) {
    let availableJobs = jobs.filter((job) => job.arrivalTime <= currentTime);
    if (availableJobs.length === 0) {
      currentTime++;
      continue;
    }

    let nextJob = availableJobs.reduce((prev, curr) =>
      prev.burstTime < curr.burstTime ? prev : curr
    );
    let startTime = currentTime;
    let endTime = startTime + parseInt(nextJob.burstTime);

    ganttChart.push({ job: nextJob.job, start: startTime, end: endTime });

    let finishTime = endTime;
    let turnaroundTime = finishTime - nextJob.arrivalTime;
    let waitingTime = turnaroundTime - nextJob.burstTime;

    table.push({
      job: nextJob.job,
      arrivalTime: nextJob.arrivalTime,
      burstTime: nextJob.burstTime,
      finishTime: finishTime,
      turnaroundTime: turnaroundTime,
      waitingTime: waitingTime,
    });

    currentTime = endTime;
    jobs = jobs.filter((job) => job !== nextJob);
  }

  return { ganttChart, table };
};
