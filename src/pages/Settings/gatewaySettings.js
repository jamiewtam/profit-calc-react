import React from "react";
import { useRouteMatch } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import PageContainer from "../../Layouts/Pages/PageContainer";
import CardContainer from "../../Layouts/Pages/CardContainer";

const GatewaySettings = (props) => {
  const { path, url } = useRouteMatch();

  const [shopifyFees, setShopifyFees] = React.useState({
    percentage: 0,
    fixedFee: 0,
  });

  const [paypalFees, setPaypalFees] = React.useState({
    percentage: 0,
    fixedFee: 0,
  });

  const [stripeFees, setStripeFees] = React.useState({
    percentage: 0,
    fixedFee: 0,
  });

  const [externalGatewayFee, setExternalGatewayFee] = React.useState({
    percentage: 0,
  });

  const [CODPercentage, setCODPercentage] = React.useState({
    percentage: 0,
  });

  const FormElement = ({ id, title, value }) => {
    return (
      <React.Fragment>
        <label htmlFor="numberInput">{title}</label>
        <input
          name="numberInput"
          className="form-control"
          type="text"
          value={value}
          id={id}
          style={{ marginBottom: "10px" }}
        />
      </React.Fragment>
    );
  };

  const SettingsCard = ({ feeName, state }) => {
    return (
      <form>
        <FormElement
          id={`${feeName}-transaction-percentage`}
          title="Percentage"
          value={state.percentage}
        />
        <FormElement
          id={`${feeName}-transaction-fee-fixed`}
          title="Fixed Fee"
          value={state.fixedFee}
        />
        <button
          className="btn-outline-success btn-lg"
          id="submit-gateway-settings"
          style={{ marginTop: "20px" }}
        >
          <FaPaperPlane /> Update Gateway Fees
        </button>
      </form>
    );
  };

  const ExternalGateway = ({ state }) => {
    return (
      <form>
        <FormElement
          id={`externalGatewayFee-transaction-percentage`}
          title="Percentage"
          value={state.percentage}
        />
        <button
          className="btn-outline-success btn-lg"
          id="submit-gateway-settings"
          style={{ marginTop: "20px" }}
        >
          <FaPaperPlane /> Update Gateway Fees
        </button>
      </form>
    );
  };

  return (
    <PageContainer pageTitle="Gateway Settings">
      <div id="update-gateway-settings"></div>
      <CardContainer title="Shopify Fees">
        <SettingsCard feeName="shopify" state={shopifyFees} />
      </CardContainer>
      <CardContainer title="Paypal Fees">
        <SettingsCard feeName="paypal" state={paypalFees} />
      </CardContainer>
      <CardContainer title="Stripe Fees">
        <SettingsCard feeName="stripe" state={stripeFees} />
      </CardContainer>
      <CardContainer title="External Gateway Fees">
        <ExternalGateway state={externalGatewayFee} />
      </CardContainer>
      <CardContainer title="Other Gateway Settings">
        <form>
          <FormElement
            id="cash-on-delivery-fee-selector"
            title="Cash on Delivery (COD) - Per Order Fee"
            value={CODPercentage.percentage}
          />
          <br />
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
          <br />
          <button
            className="btn-outline-success btn-lg"
            id="submit-gateway-settings"
          >
            <i className="fa fa-paper-plane"></i> Update Other Settings
          </button>
        </form>
      </CardContainer>
    </PageContainer>
  );
};

export default GatewaySettings;
