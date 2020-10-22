import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { userContext } from "../../../util/Context/userContext";
//COMPONENTS
import SubNavMenu from "../../../components/Navigation/SubNavMenu";
import PageContainer from "../../../Layouts/Pages/PageContainer";
import {
  GeneralSettingsGeneral,
  GeneralSettingsAliexpress,
  GeneralSettingsCJDropshipping,
  GeneralSettingsOther,
} from "./generalComponents";
//FUNCTIONS
import { submitGeneralSettings } from "../../../api/settings/settingsPages/generalSettings";
import { settingsReducer } from "../../../util/factoryFunctions/general";

const routes = [
  { to: "", title: "General" },
  { to: "/aliexpress", title: "Aliexpress" },
  { to: "/CJDropshipping", title: "CJ Dropshipping" },
  { to: "/other", title: "Other" },
];

const GeneralSettings = () => {
  const {
    currencySymbol,
    adAccountBaseCurrency,
    adAccountCurrency,
    CJBaseCurrency,
    CJCurrency,
    aliexpressBaseCurrency,
    aliexpressComma,
    aliexpressCurrency,
    cashBack,
    customOrderExp,
    editOrdersFrequently,
    filterByPaid,
    shopifyCostPerItemExtraCost,
    shopifyLoan,
    timeZone,
  } = React.useContext(userContext);

  const [state, dispatch] = React.useReducer(settingsReducer, {
    currencySymbol,
    adAccountBaseCurrency,
    adAccountCurrency,
    CJBaseCurrency,
    CJCurrency,
    aliexpressBaseCurrency,
    aliexpressComma,
    aliexpressCurrency,
    cashBack,
    customOrderExp,
    editOrdersFrequently,
    filterByPaid,
    shopifyCostPerItemExtraCost,
    shopifyLoan,
    timeZone,
  });
  const { url } = useRouteMatch();

  const handleChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitGeneralSettings(state);
  };

  return (
    <PageContainer pageTitle="General Settings">
      <SubNavMenu routes={routes} url={url} />
      <Route exact path="/generalSettings">
        <GeneralSettingsGeneral
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Route>
      <Route path="/generalSettings/aliexpress">
        <GeneralSettingsAliexpress
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Route>
      <Route path="/generalSettings/CJDropshipping">
        <GeneralSettingsCJDropshipping
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Route>
      <Route path="/generalSettings/other">
        <GeneralSettingsOther
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Route>
    </PageContainer>
  );
};

export default GeneralSettings;
