import React from "react";
import { userContext } from "../../util/Context/userContext";
//COMPONENTS
import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";
import { DashboardCustomizationDropdown } from "../../components/Settings/Forms";
import { ButtonSuccess } from "../../components/General/Buttons";
//FUNCTIONS
import { submitDashboardSettings } from "../../api/settings/settingsPages/dashboadCustomization";
import { settingsReducer } from "../../util/factoryFunctions/general";

const DashboardCustomization = () => {
  const { dashboardSelection } = React.useContext(userContext);
  const {
    numberOfOrdersSelector,
    taxesCollectedSelector,
    shippingChargedSelector,
    profitMarginSelector,
    cashbackDashboardSelector,
    shopifyLoanDashboardSelector,
  } = JSON.parse(dashboardSelection);

  const [state, dispatch] = React.useReducer(settingsReducer, {
    numberOfOrdersSelector,
    taxesCollectedSelector,
    shippingChargedSelector,
    profitMarginSelector,
    cashbackDashboardSelector,
    shopifyLoanDashboardSelector,
  });

  const handleChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitDashboardSettings(state);
  };

  return (
    <PageContainer pageTitle="Dashboard Customization">
      <CardContainer>
        <h4 className="mb-0">
          Customize Where Each Card Show Up on the Dashboard
        </h4>
        <DashboardCustomizationDropdown
          title="Number Of Orders Dashboard Location"
          selected={state.numberOfOrdersSelector}
          selectorName={"VATSelector"}
          handleChange={handleChange}
        />
        <DashboardCustomizationDropdown
          title="Taxes Collected Dashboard Location"
          selected={state.taxesCollectedSelector}
          selectorName={"taxesCollectedSelector"}
          handleChange={handleChange}
        />
        <DashboardCustomizationDropdown
          title="Shipping Charged Dashboard Location"
          selected={state.shippingChargedSelector}
          selectorName={"shippingChargedSelector"}
          handleChange={handleChange}
        />
        <DashboardCustomizationDropdown
          title="Profit Margin % Dashboard Location"
          selected={state.profitMarginSelector}
          selectorName={"profitMarginSelector"}
          handleChange={handleChange}
        />
        <DashboardCustomizationDropdown
          title="Cashback Programs Dashboard Location"
          selected={state.cashbackDashboardSelector}
          selectorName={"cashbackDashboardSelector"}
          handleChange={handleChange}
        />
        <DashboardCustomizationDropdown
          title="Shopify Loans Dashboard Location"
          selected={state.shopifyLoanDashboardSelector}
          selectorName={"shopifyLoanDashboardSelector"}
          handleChange={handleChange}
        />
        <ButtonSuccess
          title="Update Dashboard Customization"
          onClick={handleSubmit}
        />
      </CardContainer>
    </PageContainer>
  );
};

export default DashboardCustomization;
