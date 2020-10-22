import React from "react";
import { userContext } from "../../../util/Context/userContext";
//COMPONENTS
import PageContainer from "../../../Layouts/Pages/PageContainer";
import { ButtonSuccess } from "../../../components/General/Buttons";
import { InputElement } from "../../../components/Settings/Forms";
import CardContainer from "../../../Layouts/Pages/CardContainer";
//FUNCTIONS
import { formatPercentage } from "../../../util/formatting/formatNumbers";
import { settingsReducer } from "../../../util/factoryFunctions/general";
import { submitGatewaySettings } from "../../../api/settings/settingsPages/gatewaySettings";

const GatewaySettings = () => {
  const {
    shopifyCardFee,
    shopifyCardFeeFixed,
    paypalCardFee,
    paypalCardFeeFixed,
    stripeCardFee,
    stripeCardFeeFixed,
    externalGatewayFee,
    cashOnDeliveryFee,
  } = React.useContext(userContext);

  const [state, dispatch] = React.useReducer(settingsReducer, {
    shopifyCardFee: formatPercentage(shopifyCardFee),
    shopifyCardFeeFixed,
    paypalCardFee: formatPercentage(paypalCardFee),
    paypalCardFeeFixed,
    stripeCardFee: formatPercentage(stripeCardFee),
    stripeCardFeeFixed,
    externalGatewayFee: formatPercentage(externalGatewayFee),
    cashOnDeliveryFee,
  });

  const handleChange = (inputName, value) => {
    dispatch({
      type: "UPDATE",
      [inputName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitGatewaySettings(state);
  };

  return (
    <PageContainer pageTitle="Gateway Settings">
      <CardContainer title="Shopify Fees">
        <InputElement
          title="Percentage"
          value={state.shopifyCardFee}
          handleChange={handleChange}
          inputName="shopifyCardFee"
        />
        <InputElement
          title="Fixed Fee"
          value={state.shopifyCardFeeFixed}
          handleChange={handleChange}
          inputName="shopifyCardFeeFixed"
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </CardContainer>
      <CardContainer title="Paypal Fees">
        <InputElement
          title="Percentage"
          value={state.paypalCardFee}
          handleChange={handleChange}
          inputName="paypalCardFee"
        />
        <InputElement
          title="Fixed Fee"
          value={state.paypalCardFeeFixed}
          handleChange={handleChange}
          inputName="paypalCardFeeFixed"
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </CardContainer>
      <CardContainer title="Stripe Fees">
        <InputElement
          title="Percentage"
          value={state.stripeCardFee}
          handleChange={handleChange}
          inputName="stripeCardFee"
        />
        <InputElement
          title="Fixed Fee"
          value={state.stripeCardFeeFixed}
          handleChange={handleChange}
          inputName="stripeCardFeeFixed"
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </CardContainer>
      <CardContainer title="External Gateway Fees">
        <InputElement
          title="Percentage"
          value={state.externalGatewayFee}
          handleChange={handleChange}
          inputName="externalGatewayFee"
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </CardContainer>
      <CardContainer title="External Gateway Fees">
        <InputElement
          title="Fixed Fee"
          value={state.cashOnDeliveryFee}
          handleChange={handleChange}
          inputName="cashOnDeliveryFee"
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </CardContainer>
    </PageContainer>
  );
};

export default GatewaySettings;
