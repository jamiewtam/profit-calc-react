import React from "react";
//CONTEXT
import { userContext } from "../../util/Context/userContext";
//COMPONENTS
import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";
import { ButtonSuccess } from "../../components/General/Buttons";
import {
  TrueOrFalseDropdown,
  InputElement,
} from "../../components/Settings/Forms";
//FUNCTIONS
import { formatPercentage } from "../../util/formatting/formatNumbers";
import { submitVATSettings } from "../../api/settings/settingsPages/vatSettings";
import { settingsReducer } from "../../util/factoryFunctions/general";

const VATSettings = () => {
  const {
    VATSelector,
    VATManualPercentage,
    VATAutoCalculatedForShipping,
    COGSVATSelector,
    COGSVATManualPercentage,
    facebookVATSelector,
    facebookVATManualPercentage,
  } = React.useContext(userContext);

  const [state, dispatch] = React.useReducer(settingsReducer, {
    VATSelector,
    VATManualPercentage: formatPercentage(VATManualPercentage),
    VATAutoCalculatedForShipping,
    COGSVATSelector,
    COGSVATManualPercentage: formatPercentage(COGSVATManualPercentage),
    facebookVATSelector,
    facebookVATManualPercentage: formatPercentage(facebookVATManualPercentage),
  });

  const handleChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitVATSettings(state);
  };

  return (
    <PageContainer pageTitle="VAT (Value Added Tax) Settings">
      <CardContainer title="Revenue VAT">
        <TrueOrFalseDropdown
          title="VAT Setting: If You Have VAT Included in Your Shopify
          Item Prices, Select True. This Will Deduct Your VAT From Your Revenue
          and Place It In the Taxes Collection/VAT Card."
          selected={state.VATSelector}
          selectorName={"VATSelector"}
          handleChange={handleChange}
        />
        <TrueOrFalseDropdown
          title="VAT Automatically Caculated for Shipping Charged Setting: If VAT is
          Automatically Calculated on Shipping Charged By Shopify. Select True"
          selected={state.VATAutoCalculatedForShipping}
          selectorName={"VATAutoCalculatedForShipping"}
          handleChange={handleChange}
        />
        <InputElement
          title="Manually Set VAT Percentage: If Your Shopify Store Does Not
          Automatically Calculate VAT And Your Shopify Item Prices Include VAT.
          Enter In Your VAT Percentage Here. (The Above VAT Setting Must Be Set to
          True for the Manual VAT Percentage to Work)"
          value={state.VATManualPercentage}
          handleChange={handleChange}
          inputName="VATManualPercentage"
        />
        <ButtonSuccess
          title="Update Currency Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
      <CardContainer title="Cost of Goods Sold VAT [Aliexpress Only]">
        <TrueOrFalseDropdown
          title="Cost of Goods Sold VAT Setting:</span> If VAT is paid on the
          Aliexpress Cost of Goods Sold. (VAT is Included in the Order Price)
          Select True. This Setting Will Decrease COGS and Decrease VAT."
          selected={state.COGSVATSelector}
          selectorName={"COGSVATSelector"}
          handleChange={handleChange}
        />
        <InputElement
          title="Cost of Goods Sold VAT Percentage: Enter in the VAT
          Percentage Paid on Cost of Goods Sold."
          value={state.COGSVATManualPercentage}
          handleChange={handleChange}
          inputName="COGSVATManualPercentage"
        />
        <ButtonSuccess
          title="Update Cost of Goods Sold VAT Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
      <CardContainer title="Ad Spend VAT">
        <TrueOrFalseDropdown
          title="Ad Spend VAT Setting: Select True if VAT is Paid on Ad
          Spend (Facebook, Google, and Bing ads). This Will Increase Your Ad
          Costs."
          selected={state.facebookVATSelector}
          selectorName={"facebookVATSelector"}
          handleChange={handleChange}
        />
        <InputElement
          title="Ad spend VAT Percentage: Enter in the VAT Percentage Paid
          on Ad spend."
          value={state.facebookVATManualPercentage}
          handleChange={handleChange}
          inputName="facebookVATManualPercentage"
        />
        <ButtonSuccess
          title="Update Ad Spend VAT Settings"
          onClick={handleSubmit}
        />
      </CardContainer>
    </PageContainer>
  );
};

export default VATSettings;
