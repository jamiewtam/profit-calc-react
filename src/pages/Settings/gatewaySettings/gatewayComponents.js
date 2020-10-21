import React from "react";

import CardContainer from "../../../Layouts/Pages/CardContainer";
import { ButtonSuccess } from "../../../components/General/Buttons";

import { InputElement } from "../../../components/Settings/Forms";

export const GatewayFeesCard = ({
  feeName,
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
          feeName={feeName}
        />
        <InputElement
          title="Fixed Fee"
          value={state.fixedFee}
          handleChange={fixedFeeChange}
          feeName={feeName}
        />
        <ButtonSuccess title="Update Gateway Fee" onClick={handleSubmit} />
      </form>
    </CardContainer>
  );
};

export const ExternalGateway = ({
  feeName,
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
          feeName={feeName}
        />
        <ButtonSuccess title={"Update Gateway Fee"} onClick={handleSubmit} />
      </form>
    </CardContainer>
  );
};

export const OtherSettings = ({
  feeName,
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
          feeName={feeName}
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
