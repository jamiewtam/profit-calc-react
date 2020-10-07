import React from "react";
import { FaPaperPlane } from "react-icons/fa";

import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";

const DashboardCustomization = (params) => {
  return (
    <PageContainer pageTitle="Dashboard Customization">
      <div id="update-dashboard-settings"></div>
      <CardContainer>
        <h4 className="mb-0">
          Customize Where Each Card Show Up on the Dashboard
        </h4>
        "Number Of Orders" Dashboard Location
        <select
          className="custom-select"
          id="number-of-orders-selector"
        ></select>
        <br />
        <br />
        "Taxes Collected" Dashboard Location
        <select
          className="custom-select"
          id="taxes-collected-selector"
        ></select>
        <br />
        <br />
        "Shipping Charged" Dashboard Location
        <select
          className="custom-select"
          id="shipping-charged-selector"
        ></select>
        <br />
        <br />
        "Profit Margin %" Dashboard Location
        <select className="custom-select" id="profit-margin-selector"></select>
        <br />
        <br />
        "Cashback Programs" Dashboard Location
        <select
          className="custom-select"
          id="cashback-dashboard-selector"
        ></select>
        <br />
        <br />
        "Shopify Loan" Dashboard Location
        <select
          className="custom-select"
          id="shopify-loan-dashboard-selector"
        ></select>
        <br />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-dashboard-settings"
        >
          <FaPaperPlane /> Update Dashboard Display Settings
        </button>
      </CardContainer>
    </PageContainer>
  );
};

export default DashboardCustomization;
