export const getRunningTotal = list => {
  let runningTotal = 0;
  // loop through expenses list and get the running total
  for (let i in list) {
    runningTotal += list[i]["total"];
  }

  // format the total
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(runningTotal);
};
