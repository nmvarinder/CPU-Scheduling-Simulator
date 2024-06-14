export const calculateSTRF = (arrivalTimes, burstTimes) => {
  let ganttChart = [];
  let table = [];
  let currentTime = 0;
  let jobs = arrivalTimes.map((time, index) => ({
    arrivalTime: time,
    burstTime: burstTimes[index],
    remainingTime: burstTimes[index],
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
      prev.remainingTime < curr.remainingTime ? prev : curr
    );
    nextJob.remainingTime--;
    currentTime++;

    if (nextJob.remainingTime === 0) {
      let finishTime = currentTime;
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

      jobs = jobs.filter((job) => job !== nextJob);
    }

    ganttChart.push({
      job: nextJob.job,
      start: currentTime - 1,
      end: currentTime,
    });
  }

  return { ganttChart, table };
};
