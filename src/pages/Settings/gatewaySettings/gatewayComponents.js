import React from "react";

import CardContainer from "../../../Layouts/Pages/CardContainer";
import { ButtonSuccess } from "../../../components/General/Buttons";

import { InputElement } from "../../../components/Settings/Forms";

export const GatewayFeesCard = ({
  inputName,
  state,
  fixedFeeChange,
  percentageChange,
  handleSubmit,
  title,
}) => {
  return (
    <CardContainer title={title}>
      <form>
        <InputElement
          title="Percentage"
          value={state.percentage}
          handleChange={percentageChange}
          inputName={inputName}
        />
        <InputElement
          title="Fixed Fee"
          value={state.fixedFee}
          handleChange={fixedFeeChange}
          inputName={inputName}
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </form>
    </CardContainer>
  );
};

export const ExternalGateway = ({
  inputName,
  state,
  percentageChange,
  handleSubmit,
  title,
}) => {
  return (
    <CardContainer title={title}>
      <form>
        <InputElement
          title="Percentage"
          value={state.percentage}
          handleChange={percentageChange}
          inputName={inputName}
        />
        <ButtonSuccess title={"Update Gateway Fee"} onClick={handleSubmit} />
      </form>
    </CardContainer>
  );
};

export const OtherSettings = ({
  inputName,
  state,
  fixedFeeChange,
  handleSubmit,
  title,
}) => {
  return (
    <CardContainer title={title}>
      <form>
        <InputElement
          title="Cash on Delivery (COD) - Per Order Fee"
          value={state.fixedFee}
          handleChange={fixedFeeChange}
          inputName={inputName}
        />
        <ButtonSuccess title={"Update Other Settings"} onClick={handleSubmit} />
        {/* <br />
        <div className="div">
          <span>Shopify Payments - iDeal Gateway:</span> If you accept
          payments through iDeal with Shopify Payments in the Netherlands.
          Select "True". This will account for the flat rate 0.29 cents per
          transaction for payments received through iDeal with Shopify
          Payments.
        </div>
        <select className="custom-select" id="nl-gateway-selector">
          <option value="true">True</option>
          <option value="false" selected>
            False
          </option>
        </select>
        <br />
        <br /> */}
      </form>
    </CardContainer>
  );
};
