import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import formatDateDiff from "../dashboard/calculations/monthlyExpDateDifference";

// REVENUE ------------------------------------------------------------------------------------------

// Shopify Revenue
export const getRevenueByDateRedis = async (
  startDateUnformatted,
  endDateUnformatted,
  storeName
) => {
  const startDate = moment(startDateUnformatted).format("YYYY-MM-DDTHH:mm:ss");
  const endDate = moment(endDateUnformatted).format("YYYY-MM-DDTHH:mm:ss");
  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createBasicRedisJob",
      data: {
        type: "revenue",
        startDate,
        endDate,
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "revenue",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      const totalRevenue = finalResult.data.totalRev;
      const creditCardFees = finalResult.data.creditCardFeeTotal;
      const shippingItem = finalResult.data.totalShipping;
      let taxItem = finalResult.data.totalTax;
      const orderCount = finalResult.data.orderCount;
      const shopifyLoanExp = finalResult.data.shopifyLoanExp;
      const customCountryExpTotal = finalResult.data.customCountryExpTotal;
      const VATSelector = finalResult.data.VATSelector;

      const revenueItems = [
        creditCardFees,
        shippingItem,
        taxItem,
        orderCount,
        totalRevenue,
        shopifyLoanExp,
        customCountryExpTotal,
        VATSelector,
      ];
      return revenueItems;
    }
  } catch (err) {
    // console.log('error', err.response.data.message);

    const creditCardFees = 0;
    const shippingItem = 0;
    const taxItem = 0;
    const orderCount = 0;
    const totalRevenue = 0;
    const shopifyLoanExp = 0;
    const customCountryExpTotal = 0;
    const VATSelector = false;

    const revenueItems = [
      creditCardFees,
      shippingItem,
      taxItem,
      orderCount,
      totalRevenue,
      shopifyLoanExp,
      customCountryExpTotal,
      VATSelector,
    ];

    // Reset all value to zero if Error

    return revenueItems;
  }
};

// REVENUE BY DATE
export const renderRevenueByDateTotal = async (
  unformattedStartDate,
  unformattedEndDate
) => {
  const startDate = unformattedStartDate.format("YYYY-MM-DD");
  const endDate = unformattedEndDate.format("YYYY-MM-DD");
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/revenueByDateTotalForDashboard",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      //1. Get Data from POST request

      return res.data.data.revenueByDate;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    return 0;
  }
};

// COGS SECTION ------------------------------------------------------------------------------------------

// MANUAL
export const renderCOGSRedis = async (
  startDateUnformatted,
  endDateUnformatted,
  storeName
) => {
  const startDate = moment(startDateUnformatted).format("YYYY-MM-DDTHH:mm:ss");
  const endDate = moment(endDateUnformatted).format("YYYY-MM-DDTHH:mm:ss");

  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createBasicRedisJob",
      data: {
        type: "manualCOGS",
        startDate,
        endDate,
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "manualCOGS",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      const totalCOGS = finalResult.data.totalCOGS;
      const customOrderExp = finalResult.data.customOrderExp;

      return [totalCOGS, customOrderExp];
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    const totalCOGS = 0;
    const customOrderExp = 0;
    return [totalCOGS, customOrderExp];
  }
};

// ALIEXPRESS
export const renderAliexpressExpense = async (
  formatStartDate,
  formatEndDate
) => {
  const startDate = formatStartDate.format("YYYY-MM-DD");
  const endDate = formatEndDate.format("YYYY-MM-DD");
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/Aliexpense",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      //1. Get Data from POST request
      const totalExp = res.data.data.totalExpenses;
      const cashBackTotal = totalExp * res.data.data.cashBackPercentage;
      const aliexpressVAT = res.data.data.aliexpressVAT;

      const expItems = [totalExp, cashBackTotal, aliexpressVAT];
      return expItems;
    }
  } catch (err) {
    console.log("error", err.response.data.message);

    const totalExp = 0;
    const cashBackTotal = 0;
    const aliexpressVAT = 0;

    const expItems = [totalExp, cashBackTotal, aliexpressVAT];
    return expItems;
  }
};

// CJ DROPSHIPPING
export const renderCJShippingExpense = async (startDate, endDate) => {
  const totalCJZero = 0;
  const formattedStartedDate = startDate.format("YYYY-MM-DD HH:mm:s");
  const formattedEndDate = endDate.format("YYYY-MM-DD HH:mm:s");

  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/CJ/renderData",
      data: {
        startDate: formattedStartedDate,
        endDate: formattedEndDate,
        attempt: "first",
      },
    });
    if (res.data.status === "TIMEOUT") {
      try {
        res = await axios({
          method: "POST",
          url: "http://localhost:9000/api/v1/CJ/renderData",
          data: {
            startDate: formattedStartedDate,
            endDate: formattedEndDate,
            attempt: "second",
          },
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error With Your CJ Shipping Account",
          html: `To Fix This Error. Please re-enter your CJ Dropshipping API Key. If You Have Any Questions. Contact Us.`,
          confirmButtonText:
            '<a href="https://www.profitcalc.io/cjShippingSetup" stye="color: white">Click Here to Re-enter Your API Key</a>',
          confirmButtonColor: "#ffffff",
        });
      }
    }
    if (res.data.status === "success") {
      const totalCJ = res.data.data.totalCJ;

      if (totalCJ > 0) {
        return totalCJ;
      } else {
        return totalCJZero;
      }
    }
    if (res.data.status === "error") {
      //If Error with Facebook Ad Account syncing.
      Swal.fire({
        icon: "error",
        title: "Error With Your CJ Shipping Account",
        html: `To Fix This Error. Please re-enter your CJ Dropshipping API Key. If You Have Any Questions. Contact Us.`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/cjShippingSetup" stye="color: white">Click Here to Re-enter Your API Key</a>',
        confirmButtonColor: "#ffffff",
      });
      return totalCJZero;
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Error With Your CJ Shipping Account",
      html: `To Fix This Error. Please re-enter your CJ Dropshipping API Key. If You Have Any Questions. Contact Us.`,
      confirmButtonText:
        '<a href="https://www.profitcalc.io/cjShippingSetup" stye="color: white">Click Here to Re-enter Your API Key</a>',
      confirmButtonColor: "#ffffff",
    });
    return totalCJZero;
  }
};

// COGS BY DATE
export const renderCOGSByDateTotal = async (
  unformattedStartDate,
  unformattedEndDate
) => {
  const startDate = unformattedStartDate.format("YYYY-MM-DD");
  const endDate = unformattedEndDate.format("YYYY-MM-DD");
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/COGSByDateTotalForDashboard",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      //1. Get Data from POST request
      return res.data.data.COGSByDateTotal;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    return 0;
  }
};

// REFUNDS ------------------------------
export const renderRefundsTotalRedis = async (
  startDateUnformatted,
  endDateUnformatted,
  storeName
) => {
  const startDateClone = startDateUnformatted.clone();
  const startDateCloneTwo = startDateUnformatted.clone();
  const endDateClone = endDateUnformatted.clone().format("YYYY-MM-DDTHH:mm:ss");
  const endDateCloneTwo = endDateUnformatted.clone();

  const startDate = moment(startDateUnformatted).format("YYYY-MM-DDTHH:mm:ss");

  const refundStartDate = moment(startDateClone)
    .subtract(8, "months")
    .format("YYYY-MM-DDTHH:mm:ss");

  let editedOrderStartDate = moment(startDateCloneTwo)
    .subtract(1, "days")
    .format("YYYY-MM-DDTHH:mm:ss");

  const editedOrderEndDate = moment(endDateCloneTwo).format(
    "YYYY-MM-DDTHH:mm:ss"
  );

  if (storeName === "united-se7en.myshopify.com") {
    editedOrderStartDate = moment(startDateCloneTwo)
      .subtract(19, "days")
      .format("YYYY-MM-DDTHH:mm:ss");
  }

  const refundEndDate = moment().format("YYYY-MM-DDTHH:mm:ss");

  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createRefundRedisJob",
      data: {
        type: "refunds",
        startDate,
        refundStartDate,
        refundEndDate,
        endDateClone,
        editedOrderStartDate,
        editedOrderEndDate,
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "refund",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      const totalRefunds = finalResult.data.totalRefunds;
      const totalRefundedNetCreditCardFees =
        finalResult.data.totalCreditCardRefunds;
      const totalNetTaxRefunds = finalResult.data.totalNetTaxRefunds;
      const totalRefundedNetCOGS = finalResult.data.totalRefundedNetCOGS;
      const totalRefundedNetShipping =
        finalResult.data.totalRefundedNetShipping;
      const totalRefundedNetRevenue = finalResult.data.totalRefundedNetRevenue;

      const refundItems = [
        totalRefunds,
        totalRefundedNetCreditCardFees,
        totalNetTaxRefunds,
        totalRefundedNetCOGS,
        totalRefundedNetShipping,
        totalRefundedNetRevenue,
      ];
      return refundItems;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    const totalRefunds = 0;
    const totalRefundedNetCreditCardFees = 0;
    const totalNetTaxRefunds = 0;
    const totalRefundedNetCOGS = 0;
    const totalRefundedNetShipping = 0;
    const totalRefundedNetRevenue = 0;

    const refundItems = [
      totalRefunds,
      totalRefundedNetCreditCardFees,
      totalNetTaxRefunds,
      totalRefundedNetCOGS,
      totalRefundedNetShipping,
      totalRefundedNetRevenue,
    ];
    return refundItems;
  }
};

// AD COSTS ------------------------------------------------------------------------------------------

// GOOGLE
export const renderGoogleExpense = async (
  startDateUnformatted,
  endDateUnformatted
) => {
  const startDate = startDateUnformatted.format("YYYY-MM-DD");
  const endDate = endDateUnformatted.format("YYYY-MM-DD");

  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/google",
      data: {
        startDateFromUser: startDate,
        endDateFromUser: endDate,
      },
    });
    if (res.data.status === "success") {
      let totalExp = res.data.data.totalAdSpendWithConversion;
      if (totalExp > 0) {
        return totalExp;
      } else {
        totalExp = 0;
        return totalExp;
      }
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      icon: "error",
      title: "Error. Your Adwords ID was entered incorrectly.",
      text: "Please go to the Ad Login page and edit your ID",
    });
    let totalExp = 0;
    return totalExp;
  }
};

// FACEBOOK
export const renderFacebookExpense = async (startDate, endDate) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/getfacebookspend",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      const totalExp = res.data.data.totalAdSpendWithConversion;

      if (totalExp > 0) {
        return totalExp;
      } else {
        let totalExpZero = 0;
        return totalExpZero;
      }
    }
    if (res.data.status === "error") {
      //If Error with Facebook Ad Account syncing.

      Swal.fire({
        icon: "error",
        title: "Error With Your Facebook Ads",
        html: `${res.data.data.error.message}, </br> </br> To Fix This Error. Please remove your account and re-signin <a href="https://www.profitcalc.io/adlogins">HERE</a> or click the button below. If you have any questions or issues contact us.`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/adlogins" stye="color: white">Click Here to Re-Signin</a>',
        confirmButtonColor: "#ffffff",
      });
      let totalExpZero = 0;
      return totalExpZero;
    }
  } catch (err) {
    //If Error with Facebook Ad Account syncing.

    Swal.fire({
      icon: "error",
      title: "Error With Your Facebook Ads Account.",
      text: `To Fix This Error. Please Sign-out Of Your Facebook Account (Located On Bottom of the "Ad Platform Page"). Then Re-signin. If you have any questions or issues contact us.`,
    });
    let totalExpZero = 0;
    return totalExpZero;
  }
};

// BING
export const renderBingAds = async (startDate, endDate) => {
  //Format date into DD, MM YY for both Start and End Dates
  const startDay = startDate.format("D");
  const startMonth = startDate.format("M");
  const startYear = startDate.format("YYYY");
  const endDay = endDate.format("D");
  const endMonth = endDate.format("M");
  const endYear = endDate.format("YYYY");

  try {
    const response = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/microsoft/renderBingAdsData",
      data: {
        startDay,
        startMonth,
        startYear,
        endDay,
        endMonth,
        endYear,
      },
    });
    if (response.data.status === "success") {
      const totalBingAdSpend =
        response.data.data.totalBingAdSpendWithConversion;

      return totalBingAdSpend;
    }

    if (response.data.status === "timeZoneError") {
      //If Error with Facebook Ad Account syncing.

      Swal.fire({
        icon: "error",
        title: "Error With Bing Ads",
        html: `1) Bing Ads cannot accept requests in the future or before this Bing Ads account existed. </br> </br>To fix future request errors. Please change your timezone in Bing Ads or in Profit Calc. </br> </br> 2) There may be an issue with your Bing Ads id. If adjusting the timezone does not work please contact us (applies to Bing Ad accounts with multiple Ids).`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/settings" stye="color: white">Click Here to Change Your Timezone</a>',
        confirmButtonColor: "#ffffff",
      });
      let totalBingAdSpend = 0;
      return totalBingAdSpend;
    }

    if (response.data.status === "error") {
      //If Error with Facebook Ad Account syncing.

      Swal.fire({
        icon: "error",
        title: "Error With Your Bing Ads",
        html: `To Fix This Error. Please remove your Bing account and re-signin <a href="https://www.profitcalc.io/adlogins">HERE</a> or click the button below. If you have any questions or issues contact us.`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/adlogins" stye="color: white">Click Here to Re-Signin</a>',
        confirmButtonColor: "#ffffff",
      });
      let totalBingAdSpend = 0;
      return totalBingAdSpend;
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Error With Your Bing Ads",
      html: `To Fix This Error. Please remove your Bing account and re-signin <a href="https://www.profitcalc.io/adlogins">HERE</a> or click the button below. If you have any questions or issues contact us.`,
      confirmButtonText:
        '<a href="https://www.profitcalc.io/adlogins" stye="color: white">Click Here to Re-Signin</a>',
      confirmButtonColor: "#ffffff",
    });

    const totalBingAdSpend = 0;

    return totalBingAdSpend;
  }
};

// BING REFRESH TOKEN
export const refreshAccessToken = async () => {
  try {
    const response = await axios({
      url: "http://localhost:9000/api/v1/microsoft/getNewAccessToken",
    });
    if (response.data.status === "success") {
      return "Completed";
    }
    if (response.data.status === "error") {
      Swal.fire({
        icon: "error",
        title: "Error With Your Bing Ads",
        html: `To Fix This Error. Please re-authenticate your Bing Ads by re-signing in  <a href="https://www.profitcalc.io/adlogins">HERE</a> or click the button below. If you have any questions or issues contact us.`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/adlogins" stye="color: white">Click Here to Re-Signin</a>',
        confirmButtonColor: "#ffffff",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// OTHER EXPENSES------------------------------

// MONTHLY EXPENSES
export const renderExpenses = async (
  unformattedStartDate,
  unformattedEndDate
) => {
  try {
    const startDate = unformattedStartDate.format("YYYY-MM-DD");
    const endDate = unformattedEndDate.format("YYYY-MM-DD");
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/expense",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      const monthlyExp = res.data.data.userExpenses;
      const totalExp = res.data.data.totalExpenses;
      const timeZone = res.data.data.userTimeZone;

      const startDateTimeZone = moment(startDate);
      const endDateTimeZone = moment(endDate);

      const formattedExp = formatDateDiff(
        startDateTimeZone,
        endDateTimeZone,
        monthlyExp,
        totalExp,
        timeZone
      );

      return formattedExp;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// CUSTOM COUNTRY EXPENSE
export const getCustomCountryExpDashboard = async (
  startDateUnformatted,
  endDateUnformatted,
  storeName
) => {
  const startDate = moment(startDateUnformatted).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  const endDate = moment(endDateUnformatted).format("MMMM Do YYYY, h:mm:ss a");

  let res;
  try {
    res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createBasicRedisJob",
      data: {
        type: "customCountryExp",
        startDate,
        endDate,
        storeName,
      },
    });

    const jobId = res.data.id;

    let finalResult;

    const checkDataRedis = async (id) => {
      let redisResult;
      try {
        redisResult = await axios({
          method: "POST",
          url: `http://localhost:9000/api/v1/job/${id}`,
          data: {
            type: "customCountryExp",
          },
        });
      } catch (err) {
        console.log("error", err.response.data.message);
      }

      if (
        redisResult.data.state === "completed" &&
        redisResult.data.data !== null
      ) {
        finalResult = redisResult.data;
      } else if (redisResult.data.state === "failed") {
        throw new Error();
      } else {
        await checkDataRedis(id);
      }
    };

    await checkDataRedis(jobId);

    if (finalResult.state === "completed") {
      const totalCustomCountryCOGS = finalResult.data.totalCOGS;

      return totalCustomCountryCOGS;
    }
  } catch (err) {
    const totalCustomCountryCOGS = 0;

    return totalCustomCountryCOGS;
  }
};

// INSERT EXPENSE TABLE

export const renderExpenseTable = async (
  unformattedStartDate,
  unformattedEndDate
) => {
  try {
    const startDate = unformattedStartDate.format("YYYY-MM-DD");
    const endDate = unformattedEndDate.format("YYYY-MM-DD");
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/expense",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      const expenses = res.data.data.userExpenses;
      const sortedExpenses = expenses.sort(function (a, b) {
        return new Date(b.expenseDate) - new Date(a.expenseDate);
      });

      return sortedExpenses;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    return 0;
  }
};
