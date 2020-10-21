import moment from "moment";

// FUNCTIONS for Date Difference --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Solves the monthly expense relative to the number of days selected. e.g. Sept 5th - Oct 24th will give the monthly relative expense in proportion to days included.

export default (startDate, endDate, monthlyExp, totalExp, timeZone) => {
  const startDateClone = startDate.clone();
  const endDateClone = endDate.clone();
  //const startDateMonth = startDateClone.format('MM');
  const startDateMonth = new Date(startDateClone).getMonth() + 1;
  //const endDateMonth = endDateClone.format('MM');
  const endDateMonth = new Date(endDateClone).getMonth() + 1;
  //const longMonthsArr = ['01', '03', '05', '07', '08', '10', '12'];
  const longMonthsArr = [1, 3, 5, 7, 8, 10, 12];
  //const febMonthArr = ['02'];
  const febMonthArr = [2];
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay) + 1);
  const diffMonths = Math.abs(endDateMonth - startDateMonth);
  const totalExpInt = totalExp;

  const totalFirstMonthAndSecondMonth = (
    monthlyExpFM,
    startDateFM,
    endDateSM,
    daysFM,
    daysSM
  ) => {
    let secondMonthExpTotal = 0;
    let firstMonthExpTotal = 0;
    monthlyExpFM.forEach((exp) => {
      const formattedExpenseDate = moment
        .utc(exp.expenseDate)
        .format("YYYY-MM-DDTHH:mm:ss");
      if (moment(formattedExpenseDate).isSame(startDateFM, "month")) {
        secondMonthExpTotal += exp.amount;
      } else {
        firstMonthExpTotal += exp.amount;
      }
    });
    const firstMonth =
      ((daysFM - startDateFM.date() + 1) / daysFM) * firstMonthExpTotal;

    const secondMonth = (endDateSM.date() / daysSM) * secondMonthExpTotal;
    const totalCombinedExp = firstMonth + secondMonth;
    return totalCombinedExp;
  };

  // 1. If StartDate month is a 31 days month && date diff is less than 31 days
  if (longMonthsArr.includes(startDateMonth) && diffDays <= 31) {
    // Under 1 31 day month
    if (diffMonths === 0) {
      const multi = diffDays / 31;
      if (multi === 0) {
        const total = (1 / 31) * totalExpInt;
        return total;
      }
      const total = multi * totalExpInt;
      return total;
    } else if (diffMonths > 0) {
      //if (startDateMonth === '07' && endDateMonth === '08') {
      if (startDateMonth === 7 && endDateMonth === 8) {
        const totalCombinedExp = totalFirstMonthAndSecondMonth(
          monthlyExp,
          startDate,
          endDate,
          31,
          31
        );

        return totalCombinedExp;
      }
      const totalCombinedExp = totalFirstMonthAndSecondMonth(
        monthlyExp,
        startDate,
        endDate,
        31,
        30
      );

      return totalCombinedExp;
    }
    // 2. If day difference is under 1 month and a start month is not a 31 day month && FEB MONTH IS NOT INCLUDED.
  } else if (
    !longMonthsArr.includes(startDateMonth) &&
    !febMonthArr.includes(startDateMonth) &&
    !febMonthArr.includes(endDateMonth) &&
    diffDays <= 31
  ) {
    if (diffMonths === 0) {
      const multi = diffDays / 30;
      if (multi === 0) {
        const total = (1 / 30) * totalExpInt;
        return total;
      }
      const total = multi * totalExpInt;
      return total;
    } else if (diffMonths > 0) {
      const totalCombinedExp = totalFirstMonthAndSecondMonth(
        monthlyExp,
        startDate,
        endDate,
        30,
        31
      );
      return totalCombinedExp;
    }
    // DATE INCLUDES FEBRUARY AS A MONTH. SO HAVE TO ADJUST FOR THE 28 DAYS
  } else if (
    febMonthArr.includes(startDateMonth) ||
    (febMonthArr.includes(endDateMonth) && diffDays <= 31)
  ) {
    //Same month
    if (diffMonths === 0) {
      const multi = diffDays / 28;
      if (multi === 0) {
        const total = (1 / 28) * totalExpInt;
        return total;
      }
      const total = multi * totalExpInt;
      return total;
    } else if (diffMonths > 0) {
      if (febMonthArr.includes(startDateMonth)) {
        const totalCombinedExp = totalFirstMonthAndSecondMonth(
          monthlyExp,
          startDate,
          endDate,
          28,
          31
        );
        return totalCombinedExp;
      } else if (febMonthArr.includes(endDateMonth)) {
        const totalCombinedExp = totalFirstMonthAndSecondMonth(
          monthlyExp,
          startDate,
          endDate,
          31,
          28
        );
        return totalCombinedExp;
      }
    }
    // DATE DIFFERENCE IS GREATER THAN 31 DAYS. SO EXPENSE SPANS MULTIPLE MONTHS
  } else if (diffDays > 31) {
    // DATE is greater than 31
    let longTotalExp = 0;
    monthlyExp.forEach((exp) => {
      const formattedExpenseDate = moment
        .utc(exp.expenseDate)
        .format("YYYY-MM-DDTHH:mm:ss");
      if (
        !moment(formattedExpenseDate).isSame(startDate, "month") &&
        !moment(formattedExpenseDate).isSame(endDate, "month")
      ) {
        //1.  The full month is encompassed. Add full expense
        longTotalExp += exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(startDate, "month") &&
        longMonthsArr.includes(startDateMonth)
      ) {
        // The expense date starts in the first month && the startDate is a 31 day month.
        longTotalExp += ((31 - startDate.date() + 1) / 31) * exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(startDate, "month") &&
        !longMonthsArr.includes(startDateMonth) &&
        !febMonthArr.includes(startDateMonth)
      ) {
        longTotalExp += ((30 - startDate.date() + 1) / 30) * exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(startDate, "month") &&
        !longMonthsArr.includes(startDateMonth) &&
        febMonthArr.includes(startDateMonth)
      ) {
        longTotalExp += ((28 - startDate.date() + 1) / 28) * exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(endDate, "month") &&
        longMonthsArr.includes(startDateMonth)
      ) {
        longTotalExp += (endDate.date() / 31) * exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(endDate, "month") &&
        !longMonthsArr.includes(startDateMonth) &&
        !febMonthArr.includes(startDateMonth)
      ) {
        longTotalExp += (endDate.date() / 30) * exp.amount;
      } else if (
        moment(formattedExpenseDate).isSame(endDate, "month") &&
        !longMonthsArr.includes(startDateMonth) &&
        febMonthArr.includes(startDateMonth)
      ) {
        longTotalExp += (endDate.date() / 28) * exp.amount;
      }
    });
    return longTotalExp;
  }
};
