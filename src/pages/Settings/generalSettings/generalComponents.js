import React from "react";

import CardContainer from "../../../Layouts/Pages/CardContainer";

import { ButtonSuccess } from "../../../components/General/Buttons";

import {
  SelectDropdown,
  InputElement,
} from "../../../components/Settings/Forms";

import {
  dashboardCurrencyOptions,
  currencyCodes,
  timeZones,
  trueOrFalse,
} from "./selectOptions";

export const GeneralSettingsGeneral = () => {
  return (
    <React.Fragment>
      <CardContainer title="Dashboard Currency">
        <SelectDropdown
          title="Currency Symbol Displayed On Dashboard"
          options={dashboardCurrencyOptions}
        />
        <ButtonSuccess title="Update Dashboard Currency" />
      </CardContainer>
      <CardContainer title="Ad Account Currency">
        <p>
          The Below Settings Are To Convert Your Facebook, Google, and Bing Ad
          Spend Into the Currency of Your Shopify Store Using the Latest
          Exchange Rates.
        </p>
        <SelectDropdown
          title="Shopify Store Currency"
          options={currencyCodes}
        />
        <br />
        <SelectDropdown title="Ad Account Currency" options={currencyCodes} />
        <ButtonSuccess title="Update Currency Settings" />
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsAliexpress = () => {
  return (
    <React.Fragment>
      <CardContainer title="Aliexpress Settings">
        <p>
          The Below Settings Are To Convert Your Aliexpress COGS Into the
          Currency of Your Shopify Store Using the Latest Exchange Rates.
        </p>
        <SelectDropdown
          title="Shopify Store Currency"
          options={currencyCodes}
        />
        <br />
        <SelectDropdown title="Aliexpress Currency" options={currencyCodes} />
        <hr />
        <InputElement
          title="Cashback Percentage: For Aliexpress Cashback Programs"
          value=""
          // handleChange={percentageChange}
          // feeName={feeName}
        />
        <hr />
        <SelectDropdown
          title="Decimal Place Selector: If Your Currency Displays Values
        Using Periods Instead of Commas. Select True. E.g. 10.000 is Read as Ten
        Thousand Dollars Rather than Ten Dollars."
          options={trueOrFalse}
        />
        <ButtonSuccess title="Update Aliexpress Settings" />
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
        <SelectDropdown
          title="Shopify Store Currency"
          options={currencyCodes}
        />
        <br />
        <SelectDropdown
          title="CJ Dropshipping Currency (The Currency Used to Purchase Goods)"
          options={currencyCodes}
        />
        <ButtonSuccess title="Update CJ Dropshipping Settings" />
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsOther = () => {
  return (
    <React.Fragment>
      <CardContainer title="Additional Expense Settings">
        <InputElement
          title="[Dashboard Setting] Custom Order Expense:  This Expense is Applied to Every Order. Setting Only Works If Manual
          COGS are Turned On. "
          value=""
          // handleChange={percentageChange}
          // feeName={feeName}
        />
        <br />
        <InputElement
          title="[Manual COGS Syncing] Additional Shopify Cost Per Item Expense: This Cost is Added to Ever Cost Per Item Synced From Shopify. For Manual COGS Only."
          value=""
          // handleChange={percentageChange}
          // feeName={feeName}
        />
        <ButtonSuccess title="Update Additional Expenses" />
      </CardContainer>
      <CardContainer title="Other Settings">
        <SelectDropdown
          title="Time-zone:Dashboard Will Display Financial Metrics Based On This Time Zone."
          options={timeZones}
        />
        <br />
        <InputElement
          title="Shopify Loan Percentage: For Percentage of Sales Loans Granted By Shopify"
          value=""
          // handleChange={percentageChange}
          // feeName={feeName}
        />
        <SelectDropdown
          title="Filter Dashboard by Payment Status of Paid: Dashboard only
          shows orders which are paid. For Shopify stores which use cash of
          delivery."
          options={trueOrFalse}
        />
        <br />
        <SelectDropdown
          title="Orders Are Frequently Edited: </span>If You Frequently Edit Orders
          e.g. Removing Items to Existing Orders Rather Than Refunding Them.
          Select True"
          options={trueOrFalse}
        />
        <ButtonSuccess title="Update Other Settings" />
      </CardContainer>
    </React.Fragment>
  );
};
