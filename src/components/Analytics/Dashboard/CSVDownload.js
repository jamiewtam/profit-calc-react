import React from 'react';

import { CSVLink } from "react-csv";
import { FaSync } from "react-icons/fa";

import CardContainer from '../../../Layouts/Pages/CardContainer';


const CSVDownload = ({ dashboardData, startDate, endDate }) => {

    const CSVDashboardData = [
        ['Start Date', `${startDate.toLocaleString()}`],
        ['End Date', `${endDate.toLocaleString()}`],
        ['Total Revenue', `${dashboardData.netRevenue}`],
        ['COGS', `${dashboardData.netCOGS}`],
        ['Custom Order Expense', `${dashboardData.totalCustomerOrderExp}`],
        ['Gross Margin', `${dashboardData.grossMargin}`],
        ['Number of Orders', `${dashboardData.orderCount}`],
        ['Taxes Collected', `${dashboardData.netTaxes}`],
        ['Shipping Charged', `${dashboardData.totalNetShipping}`],
        ['Refunds', `${dashboardData.totalRefunds}`],
        ['Google Ads', `${dashboardData.googleExp}`],
        ['Facebook Ads', `${dashboardData.fbExp}`],
        ['Bing Ads', `${dashboardData.bingExp}`],
        ['Monthly Expenses', `${dashboardData.monthlyExpenses}`],
        ['Transaction Fees', `${dashboardData.netCreditCardFees}`],
        ['Cashback Programs', `${dashboardData.cashBackTotal}`],
        ['Shopify Loan Expense', `${dashboardData.shopifyLoanExp}`],
        ['Profit Margin', `${dashboardData.profitMarginPerc}`],
        ['Profit', `${dashboardData.profit}`],
        ['Other Metics'],
        ['Average Order Value', `${dashboardData.avgOrderValueTotal}`],
        ['Ad Cost Per Order', `${dashboardData.adCostPerOrderTotal}`],
        ['Average COGS', `${dashboardData.avgCOGSTotal}`]
    ];



    return (
        <CardContainer title="Download CSV">
            <CSVLink data={CSVDashboardData}>
                <button
                    className="btn-primary btn-lg"
                    id="submit-expense"
                >
                    <FaSync /> Download Dashboard CSV
                </button>
            </CSVLink>
        </CardContainer>
    )
}

export default CSVDownload