import React from "react";
import Swal from "sweetalert2";

import { userContext } from "../../util/Context/userContext";

import {
  getRevenueByDateRedis,
  renderAliexpressExpense,
  renderFacebookExpense,
  renderExpenses,
  renderGoogleExpense,
  renderCOGSRedis,
  renderBingAds,
  renderCJShippingExpense,
  renderRevenueByDateTotal,
  renderCOGSByDateTotal,
  renderRefundsTotalRedis,
  getCustomCountryExpDashboard,
} from "./dataFetching";

import {
  calculateFirstProfit,
  calculateGM,
  adCostPerOrder,
  averageCogs,
  avgOrderValue,
  totalCOGS,
  totalCustomExp,
  renderTotalTaxes,
  calculateNetRevenue,
  calculateNetCreditCardFees,
  calculateNetShipping,
} from "./calculations/calculations";

const useCalculateDashboardValues = async (startDate, endDate, storeName) => {
  try {
    const promiseResult = await Promise.all([
      renderRefundsTotalRedis(startDate, endDate, storeName),
      renderCOGSRedis(startDate, endDate, storeName),
      getRevenueByDateRedis(startDate, endDate, storeName),
      getCustomCountryExpDashboard(startDate, endDate, storeName),
      renderAliexpressExpense(startDate, endDate),
      renderExpenses(startDate, endDate),
      renderGoogleExpense(startDate, endDate),
      renderFacebookExpense(
        startDate.format("YYYY-MM-DD"),
        endDate.format("YYYY-MM-DD")
      ),
      renderBingAds(startDate, endDate),
      renderCJShippingExpense(startDate, endDate),
      renderCOGSByDateTotal(startDate, endDate),
      renderRevenueByDateTotal(startDate, endDate),
      // renderExpenseTable(startDate, endDate),
    ]);
    // Render Refunds Data
    const [
      totalRefunds,
      totalRefundedNetCreditCardFees,
      totalNetTaxRefunds,
      totalRefundedNetCOGS,
      totalRefundedNetShipping,
      totalRefundedNetRevenue,
    ] = await promiseResult[0];

    //Render Manual COGS
    const [manualCOGS, customOrderExp] = await promiseResult[1];

    // GET revenue by DATE
    const [
      creditCardFees,
      shippingItem,
      taxItem,
      orderCount,
      totalRevenue,
      shopifyLoanExp,
      customCountryExpTotal,
      VATSelector,
    ] = promiseResult[2];

    const totalCustomCountryExp = await promiseResult[3];
    //Calculate Aliexpress COGS
    const [totalExp, cashBackTotal, aliexpressVAT] = await promiseResult[4];
    //Monthly Expenses
    const monthlyExpenses = await promiseResult[5];
    //GOOGLE API
    const googleExp = await promiseResult[6];
    //Render Facebook AD Expense
    const fbExp = await promiseResult[7];

    // Render Bing Ads Expense
    const bingExp = await promiseResult[8];

    // Render CJ Data
    const CJExp = await promiseResult[9];

    // Render COGSByDate Data
    const COGSByDateExp = await promiseResult[10];

    // Render RevenueByDate Data
    const revenueByDate = await promiseResult[11];

    // Calculate net revenue

    const netRevenue = calculateNetRevenue(
      totalRevenue,
      revenueByDate,
      totalRefunds,
      totalRefundedNetRevenue
    );
    // Calculate net shipping

    const totalNetShipping = calculateNetShipping(
      shippingItem,
      totalRefundedNetShipping
    );

    // Calculate new transaction fees
    const netCreditCardFees = calculateNetCreditCardFees(
      creditCardFees,
      totalRefundedNetCreditCardFees
    );

    // Calculate the total COGS
    const netCOGS = totalCOGS(
      totalExp,
      manualCOGS,
      CJExp,
      COGSByDateExp,
      totalRefundedNetCOGS,
      totalCustomCountryExp
    );

    // Calculate net taxes

    const netTaxes = renderTotalTaxes(
      taxItem,
      aliexpressVAT,
      totalNetTaxRefunds
    );

    // Calculate Customer Order Expense
    const totalCustomerOrderExp = totalCustomExp(
      customOrderExp,
      orderCount,
      customCountryExpTotal
    );

    ///Calculates GM, updates the UI then returns GM
    const grossMargin = calculateGM(netRevenue, netCOGS, totalCustomerOrderExp);
    //Calculates profit, updates the UI then returns Profit
    const [profitMarginPerc, profit] = calculateFirstProfit(
      netTaxes,
      fbExp,
      googleExp,
      netCreditCardFees,
      cashBackTotal,
      monthlyExpenses,
      netRevenue,
      shopifyLoanExp,
      bingExp,
      VATSelector
    );

    //Calculate Statistics per order
    const adCostPerOrderTotal = adCostPerOrder(fbExp, googleExp, orderCount);
    const avgCOGSTotal = averageCogs(orderCount, netCOGS);
    const avgOrderValueTotal = avgOrderValue(netRevenue, orderCount);

    return [
      netRevenue,
      netCOGS,
      totalCustomerOrderExp,
      grossMargin,
      orderCount,
      netTaxes,
      totalNetShipping,
      totalRefunds,
      googleExp,
      fbExp,
      bingExp,
      monthlyExpenses,
      netCreditCardFees,
      cashBackTotal,
      shopifyLoanExp,
      profitMarginPerc,
      profit,
      avgOrderValueTotal,
      adCostPerOrderTotal,
      avgCOGSTotal,
    ];
  } catch (err) {
    console.log(err);
  }
};

export default useCalculateDashboardValues;
