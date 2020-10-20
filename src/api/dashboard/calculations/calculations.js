import { formatDecimals } from '../../../util/formatting/formatDecimals';

let grossMargin;

export const calculateGM = (orderRev, orderExp, customOrderExp) => {
  grossMargin =
    parseFloat(orderRev) - parseFloat(orderExp) - parseFloat(customOrderExp);
  if (!isNaN(grossMargin)) {
    return grossMargin;
  }

  return grossMargin;
};

export const calculateFirstProfit = (
  taxItem,
  fbExp,
  adwordsExp,
  creditCardExp,
  cashBack,
  monthlyExp,
  totalRevenue,
  shopifyLoanExp,
  bingExp,
  VATSelector
) => {
  //If VAT selector, taxes don't need to be included in the calculation for Profit (already accounted for)
  let totalTaxes = taxItem;
  if (VATSelector) {
    totalTaxes = 0;
  }

  const profit =
    grossMargin +
    parseFloat(cashBack) -
    parseFloat(totalTaxes) -
    parseFloat(fbExp) -
    parseFloat(adwordsExp) -
    parseFloat(creditCardExp) -
    parseFloat(monthlyExp) -
    parseFloat(shopifyLoanExp) -
    parseFloat(bingExp);

  let profitMarginPerc = 0;
  // CALCULATE PROFIT MARGIN %
  if (totalRevenue > 0) {
    profitMarginPerc = (profit / totalRevenue) * 100;
  }

  return [profitMarginPerc, profit];
};

export const adCostPerOrder = (fbExp, googleExp, orderNum) => {
  let totalCostPerOrder = 0;
  if (fbExp > 0 || googleExp > 0) {
    if (orderNum > 0) {
      totalCostPerOrder = formatDecimals((fbExp + googleExp) / orderNum);
    }
  }

  return totalCostPerOrder;
};

export const averageCogs = (orderNum, cogs) => {
  let avgCOGS = 0;
  if (cogs > 0 && orderNum > 0) {
    avgCOGS = cogs / orderNum;
  }
  return avgCOGS;
};

export const avgOrderValue = (revenue, orderNum) => {
  let avgOrderValueTotal = revenue / orderNum;

  return avgOrderValueTotal;
};

// CALCULATE TOTAL COGS --------------------

export const totalCOGS = (
  aliexpressExp,
  manualExp,
  CJExp,
  COGSByDateExp,
  totalRefundedCOGS,
  totalCustomCountryExp
) => {
  if (
    aliexpressExp > 0 ||
    manualExp > 0 ||
    CJExp > 0 ||
    COGSByDateExp > 0 ||
    totalRefundedCOGS ||
    totalCustomCountryExp > 0
  ) {
    const totalCOGS =
      aliexpressExp +
      manualExp +
      CJExp +
      COGSByDateExp +
      totalRefundedCOGS +
      totalCustomCountryExp;
    return totalCOGS;
  } else {
    return 0;
  }
};

export const totalCustomExp = (
  customOrderExp,
  orderCount,
  customCountryExpTotal
) => {
  if (customOrderExp > 0 || customCountryExpTotal) {
    const customTotal = customOrderExp * orderCount + customCountryExpTotal;
    return customTotal;
  } else {
    // SET TO 0
    return 0;
  }
};

export const renderTotalTaxes = (
  revenueTaxes,
  aliexpressVAT,
  totalNetTaxRefunds
) => {
  // If no Aliexpress VAT then will be the same anyways.
  const totalTaxes = revenueTaxes - aliexpressVAT + totalNetTaxRefunds;
  return totalTaxes;
};

export const calculateNetRevenue = (
  totalRevenue,
  revenueByDate,
  totalRefunds,
  totalRefundedNetRevenue
) => {
  const totalNetRevenue =
    totalRevenue + revenueByDate - totalRefunds + totalRefundedNetRevenue;
  return totalNetRevenue;
};

export const calculateNetShipping = (
  totalShipping,
  totalRefundedNetShipping
) => {
  const totalNetShipping = totalShipping + totalRefundedNetShipping;
  return totalNetShipping;
};

export const calculateNetCreditCardFees = (
  totalCreditCardFees,
  totalRefundedCreditCardFees
) => {
  const totalNetCreditCardFees =
    totalCreditCardFees + totalRefundedCreditCardFees;
  return totalNetCreditCardFees;
};
