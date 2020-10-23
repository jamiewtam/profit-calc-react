export const repeatingMonthlyExpCalculator = (
  name,
  amount,
  expenseTypeValue,
  expenseDate
) => {
  const allDatesArr = [
    "2019-01-01",
    "2019-02-01",
    "2019-03-01",
    "2019-04-01",
    "2019-05-01",
    "2019-06-01",
    "2019-07-01",
    "2019-08-01",
    "2019-09-01",
    "2019-10-01",
    "2019-11-01",
    "2019-12-01",
    "2020-01-01",
    "2020-02-01",
    "2020-03-01",
    "2020-04-01",
    "2020-05-01",
    "2020-06-01",
    "2020-07-01",
    "2020-08-01",
    "2020-09-01",
    "2020-10-01",
    "2020-11-01",
    "2020-12-01",
    "2021-01-01",
    "2021-02-01",
    "2021-03-01",
    "2021-04-01",
    "2021-05-01",
    "2021-06-01",
    "2021-07-01",
    "2021-08-01",
    "2021-09-01",
    "2021-10-01",
    "2021-11-01",
    "2021-12-01",
    "2022-01-01",
    "2022-02-01",
    "2022-03-01",
    "2022-04-01",
    "2022-05-01",
    "2022-06-01",
    "2022-07-01",
    "2022-08-01",
    "2022-09-01",
    "2022-10-01",
    "2022-11-01",
    "2022-12-01",
  ];

  const startingIndex = allDatesArr.findIndex((date) => {
    return date === expenseDate;
  });

  const allMonthlyExpArr = [];
  let counter = 0;
  let dateFinderCounter = startingIndex;

  for (counter; counter <= expenseTypeValue; counter++) {
    const tempObj = {};
    tempObj["expenseDate"] = allDatesArr[dateFinderCounter];
    tempObj["name"] = name;
    tempObj["amount"] = amount;

    allMonthlyExpArr.push(tempObj);

    dateFinderCounter += 1;
  }

  return allMonthlyExpArr;
};
