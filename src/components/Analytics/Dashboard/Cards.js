import React from "react";

import Card from "./Card"

const cardArray = (state) => {
  return [
    {
      title: "Revenue",
      amount: `${state.netRevenue}`,
      arrowDirection: "up",
      hoverText: "Total Revenue - Discount - Refunds",
    },
    {
      title: "COGS",
      amount: `${state.netCOGS}`,
      arrowDirection: "down",
      hoverText: "Aliexpress + Manual COGS + CJ + COGS By Date (If Toggled)",
    },
    {
      title: "Custom Order Expense",
      amount: `${state.totalCustomerOrderExp}`,
      arrowDirection: "down",
      hoverText: "Shipping Cost By Country + Custom Order Exp.",
    },
    {
      title: "Gross Margin",
      amount: `${state.grossMargin}`,
      arrowDirection: "none",
      hoverText: "Revenue - COGS - Custom Order Exp.",
    },
    {
      title: "Number of Orders",
      amount: `${state.orderCount}`,
      arrowDirection: "none",
      hoverText: "Informational Card",
    },
    {
      title: "Taxes Collected",
      amount: `${state.netTaxes}`,
      arrowDirection: "none",
      hoverText: "Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "Shipping Charged",
      amount: `${state.totalNetShipping}`,
      arrowDirection: "none",
      hoverText: "Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "Refunds",
      amount: `${state.totalRefunds}`,
      arrowDirection: "none",
      hoverText: "Informational Card - Already Deducted Under Total Revenue",
    },
    {
      title: "Google Ads",
      amount: `${state.googleExp}`,
      arrowDirection: "down",
      hoverText: "Google Ad Spend",
    },
    {
      title: "Facebook Ads",
      amount: `${state.fbExp}`,
      arrowDirection: "down",
      hoverText: "Facebook Ad Spend",
    },
    {
      title: "Bing Ads",
      amount: `${state.bingExp}`,
      arrowDirection: "down",
      hoverText: "Bing Ad Spend",
    },
    {
      title: "Monthly Expenses",
      amount: `${state.monthlyExpenses}`,
      arrowDirection: "down",
      hoverText: "Monthly Expenses - Pro Rated",
    },
    {
      title: "Transaction Fees",
      amount: `${state.netCreditCardFees}`,
      arrowDirection: "down",
      hoverText: "Credit Card Fees",
    },
    {
      title: "Cashback Programs",
      amount: `${state.cashBackTotal}`,
      arrowDirection: "down",
      hoverText: "Aliexpress Cashback Programs",
    },
    {
      title: "Profit Margin %",
      amount: `${state.profitMarginPerc}`,
      arrowDirection: "none",
      hoverText: "Profit Margin %",
    },
    {
      title: "Profit",
      amount: `${state.profit}`,
      arrowDirection: "none",
      hoverText: "Total Revenue - All Expenses",
    },
  ];
};

export const DashboardCards = ({ state }) => {
  return cardArray(state).map((cardElement) => {
    return (
      <Card
        title={cardElement.title}
        amount={cardElement.amount}
        arrowDirection={cardElement.arrowDirection}
        hoverText={cardElement.hoverText}
        key={cardElement.title}
      />
    );
  });
};
