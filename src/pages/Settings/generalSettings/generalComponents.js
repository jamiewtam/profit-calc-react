import React from "react";

import CardContainer from "../../../Layouts/Pages/CardContainer";
import { ButtonSuccess } from "../../../components/General/Buttons";
import {
  SelectDropdown,
  InputElement,
  TimeZoneDropdown,
  TrueOrFalseDropdown,
} from "../../../components/Settings/Forms";
import {
  dashboardCurrencyOptions,
  currencyCodes,
  timeZones,
} from "./selectOptions";

export const GeneralSettingsGeneral = ({
  state,
  handleChange,
  handleSubmit,
}) => {
  return (
    <React.Fragment>
      <CardContainer title="Dashboard Currency">
        <SelectDropdown
          title="Currency Symbol Displayed On Dashboard"
          options={dashboardCurrencyOptions}
          selected={state.currencySymbol}
          selectorName={"currencySymbol"}
          handleChange={handleChange}
        />
        <ButtonSuccess
          title="Update Dashboard Currency"
          onClick={handleSubmit}
        />
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
          selected={state.adAccountBaseCurrency}
          selectorName={"adAccountBaseCurrency"}
          handleChange={handleChange}
        />
        <SelectDropdown
          title="Ad Account Currency"
          options={currencyCodes}
          selected={state.adAccountCurrency}
          selectorName={"adAccountCurrency"}
          handleChange={handleChange}
        />
        <ButtonSuccess
          title="Update Currency Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsAliexpress = ({
  state,
  handleChange,
  handleSubmit,
}) => {
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
          selected={state.aliexpressBaseCurrency}
          selectorName={"aliexpressBaseCurrency"}
          handleChange={handleChange}
        />
        <SelectDropdown
          title="Aliexpress Currency"
          options={currencyCodes}
          selected={state.aliexpressCurrency}
          selectorName={"aliexpressCurrency"}
          handleChange={handleChange}
        />
        <hr />
        <InputElement
          title="Cashback Percentage: For Aliexpress Cashback Programs"
          value={state.cashBack}
          handleChange={handleChange}
          inputName="cashBack"
        />
        <hr />
        <TrueOrFalseDropdown
          title="Decimal Place Selector: If Your Currency Displays Values
        Using Periods Instead of Commas. Select True. E.g. 10.000 is Read as Ten
        Thousand Dollars Rather than Ten Dollars."
          selected={state.aliexpressComma}
          selectorName={"aliexpressComma"}
          handleChange={handleChange}
        />
        <ButtonSuccess
          title="Update Aliexpress Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsCJDropshipping = ({
  state,
  handleChange,
  handleSubmit,
}) => {
  return (
    <React.Fragment>
      <CardContainer title="CJ Dropshipping Currency Settings">
        The Below Settings Are To Convert Your CJ Dropshipping COGS Into the
        Currency of Your Shopify Store Using the Latest Exchange Rates.
        <SelectDropdown
          title="Shopify Store Currency"
          options={currencyCodes}
          selected={state.CJBaseCurrency}
          selectorName={"CJBaseCurrency"}
          handleChange={handleChange}
        />
        <SelectDropdown
          title="CJ Dropshipping Currency (The Currency Used to Purchase Goods)"
          options={currencyCodes}
          selected={state.CJCurrency}
          selectorName={"CJCurrency"}
          handleChange={handleChange}
        />
        <ButtonSuccess
          title="Update CJ Dropshipping Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
    </React.Fragment>
  );
};

export const GeneralSettingsOther = ({ state, handleChange, handleSubmit }) => {
  return (
    <React.Fragment>
      <CardContainer title="Additional Expense Settings">
        <InputElement
          title="[Dashboard Setting] Custom Order Expense:  This Expense is Applied to Every Order. Setting Only Works If Manual
          COGS are Turned On. "
          value={state.customOrderExp}
          handleChange={handleChange}
          inputName="customOrderExp"
        />
        <InputElement
          title="[Manual COGS Syncing] Additional Shopify Cost Per Item Expense: This Cost is Added to Ever Cost Per Item Synced From Shopify. For Manual COGS Only."
          value={state.shopifyCostPerItemExtraCost}
          handleChange={handleChange}
          inputName="shopifyCostPerItemExtraCost"
        />
        <ButtonSuccess
          title="Update Additional Expenses"
          onClick={handleSubmit}
        />
      </CardContainer>
      <CardContainer title="Other Settings">
        <TimeZoneDropdown
          title="Time-zone:Dashboard Will Display Financial Metrics Based On This Time Zone."
          options={timeZones}
          selected={state.timeZone}
          handleChange={handleChange}
          selectorName={"timeZone"}
        />
        <InputElement
          title="Shopify Loan Percentage: For Percentage of Sales Loans Granted By Shopify"
          value={state.shopifyLoan}
          handleChange={handleChange}
          inputName="shopifyLoan"
        />
        <TrueOrFalseDropdown
          title="Filter Dashboard by Payment Status of Paid: Dashboard only
          shows orders which are paid. For Shopify stores which use cash of
          delivery."
          selected={state.filterByPaid}
          selectorName={"filterByPaid"}
          handleChange={handleChange}
        />
        <TrueOrFalseDropdown
          title="Orders Are Frequently Edited: </span>If You Frequently Edit Orders
          e.g. Removing Items to Existing Orders Rather Than Refunding Them.
          Select True"
          selected={state.editOrderFrequently}
          selectorName={"editOrderFrequently"}
          handleChange={handleChange}
        />
        <ButtonSuccess title="Update Other Settings" onClick={handleSubmit} />
      </CardContainer>
    </React.Fragment>
  );
};
