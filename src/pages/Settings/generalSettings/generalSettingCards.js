import React from "react";

import { FaPaperPlane } from "react-icons/fa";

import CardContainer from "../../../Layouts/Pages/CardContainer";

export const GeneralSettingsGeneral = () => {
  return (
    <React.Fragment>
      <CardContainer title="Dashboard Currency">
        <form>
          <label htmlFor="currencySelector">
            Currency Symbol Displayed On Dashboard
          </label>
          <select
            name="currencySelector"
            className="custom-select"
            id="currency-symbol"
          >
            <option value="$">$</option>
          </select>
          <br />
          <br />
          <button
            className="btn-outline-success btn-lg"
            id="submit-other-settings"
          >
            <FaPaperPlane /> Update Dashboard Currency
          </button>
        </form>
      </CardContainer>
      <CardContainer title="Ad Account Currency">
        The Below Settings Are To Convert Your Facebook, Google, and Bing Ad
        Spend Into the Currency of Your Shopify Store Using the Latest Exchange
        Rates.
        <br />
        <br />
        <form></form>
        <label htmlFor="shopify-store-currency">Shopify Store Currency</label>
        <select
          name="shopify-store-currency"
          className="custom-select"
          id="ad-account-base-currency"
        ></select>
        <br />
        <label htmlFor="ad-account-currency">Ad Account Currency</label>
        <select
          name="ad-account-currency"
          className="custom-select"
          id="ad-account-currency"
        ></select>
        <br />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-other-settings"
        >
          <FaPaperPlane /> Update Ad Account Currency
        </button>
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsOther = () => {
  return (
    <React.Fragment>
      <CardContainer title="Additional Expense Settings">
        <span>[Dashboard Setting] Custom Order Expense: </span>
        This Expense is Applied to Every Order. Setting Only Works If Manual
        COGS are Turned On.
        <input
          className="form-control"
          type="text"
          value="$"
          id="custom-order-selector"
        />
        <br />
        [Manual COGS Syncing] Additional Shopify "Cost Per Item" Expense: This
        Cost is Added to Every "Cost Per Item" Synced From Shopify. For Manual
        COGS Only.
        <input
          className="form-control"
          type="text"
          value=""
          id="cost-per-item-extra-cost"
        />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-other-settings"
        >
          <FaPaperPlane /> Update Additional Expenses
        </button>
      </CardContainer>
      <CardContainer title="Other Settings">
        <span>Time-zone: </span> Dashboard Will Display Financial Metrics Based
        On This Time Zone.
        <select className="custom-select" id="time-zone"></select>
        <br />
        <span>Shopify Loan Percentage: </span> For Percentage of Sales Loans
        Granted By Shopify
        <input
          className="form-control"
          type="text"
          value=""
          id="shopify-loan"
        />
        <br />
        <span>Filter Dashboard by Payment Status of Paid: </span> Dashboard only
        shows orders which are paid. For Shopify stores which use cash of
        delivery.
        <select className="custom-select" id="filter-by-paid-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <span>Orders Are Frequently Edited: </span>If You Frequently Edit Orders
        e.g. Removing Items to Existing Orders Rather Than Refunding Them.
        Select True
        <select className="custom-select" id="edit-orders-frequently-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-other-settings"
        >
          <i className="fa fa-paper-plane"></i> Update Other Settings
        </button>
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsAliexpress = () => {
  return (
    <React.Fragment>
      <CardContainer title="Aliexpress Settings">
        <div className="div">
          The Below Settings Are To Convert Your Aliexpress COGS Into the
          Currency of Your Shopify Store Using the Latest Exchange Rates.
          <br />
          <br />
          <span>Shopify Store Currency</span>
        </div>
        <select
          className="custom-select"
          id="aliexpress-base-currency"
        ></select>
        <br />
        <span>Aliexpress Currency</span>
        <select className="custom-select" id="aliexpress-currency"></select>
        <hr />
        <span> Cashback Percentage: </span> For Aliexpress Cashback Programs
        <input
          className="form-control"
          type="text"
          value=""
          id="cashback-selector"
        />
        <hr />
        <span>Decimal Place Selector:</span> If Your Currency Displays Values
        Using Periods Instead of Commas. Select True. E.g. 10.000 is Read as Ten
        Thousand Dollars Rather than Ten Dollars.
        <select className="custom-select" id="aliexpress-comma-selector">
          <option value="true" selected="selected">
            True
          </option>
          <option value="false">False</option>
        </select>
        <br />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-other-settings"
        >
          <FaPaperPlane /> Update Aliexpress Settings
        </button>
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsCJDropshipping = () => {
  return (
    <React.Fragment>
      <CardContainer title="CJ Dropshipping Currency Settings">
        The Below Settings Are To Convert Your CJ Dropshipping COGS Into the
        Currency of Your Shopify Store Using the Latest Exchange Rates.
        <br />
        <br />
        <span>Shopify Store Currency</span>
        <select className="custom-select" id="CJ-base-currency"></select>
        <br />
        <span>
          CJ Dropshipping Currency (The Currency Used to Purchase Goods)
        </span>
        <select className="custom-select" id="CJ-currency"></select>
        <br />
        <br />
        <button
          className="btn-outline-success btn-lg"
          id="submit-other-settings"
        >
          <i className="fa fa-paper-plane"></i> Update CJ Dropshipping Settings
        </button>
      </CardContainer>
    </React.Fragment>
  );
};
