import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

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
          class="form-control"
          type="text"
          value={value}
          id={id}
          style={{ marginBottom: "10px" }}
        />
      </React.Fragment>
    );
  };

  const SettingsCard = ({ title, feeName, state }) => {
    return (
      <div class="card">
        <div class="card-header">
          <h3 class="mb-2">{title}</h3>
        </div>
        <div class="card-body">
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
              class="btn-outline-success btn-lg"
              id="submit-gateway-settings"
              style={{ marginTop: "20px" }}
            >
              <FaPaperPlane /> Update Gateway Fees
            </button>
          </form>
        </div>
      </div>
    );
  };

  const ExternalGateway = ({ state }) => {
    return (
      <div class="card">
        <div class="card-header">
          <h3 class="mb-2">External Payment Gateway Fee</h3>
        </div>
        <div class="card-body">
          <form>
            <FormElement
              id={`externalGatewayFee-transaction-percentage`}
              title="Percentage"
              value={state.percentage}
            />
            <button
              class="btn-outline-success btn-lg"
              id="submit-gateway-settings"
              style={{ marginTop: "20px" }}
            >
              <FaPaperPlane /> Update Gateway Fees
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div class="dashboard-wrapper">
      <div class="dashboard-finance"></div>
      <div class="container-fluid dashboard-content">
        <div class="row"></div>
        <div
          class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
          id="update-gateway-settings"
        >
          <div className="page-header" style={{ marginBottom: "20px" }}>
            <h2 className="page-title mb-2">Gateway Settings</h2>
          </div>
          <SettingsCard
            title="Shopify Gateway Fees"
            feeName="shopify"
            state={shopifyFees}
          />

          <SettingsCard
            title="Paypal Gateway Fees"
            feeName="paypal"
            state={paypalFees}
          />

          <SettingsCard
            title="Stripe Gateway Fees"
            feeName="stripe"
            state={stripeFees}
          />

          <ExternalGateway state={externalGatewayFee} />

          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Other Gateway Settings</h3>
            </div>
            <div class="card-body">
              <form>
                <FormElement
                  id="cash-on-delivery-fee-selector"
                  title="Cash on Delivery (COD) - Per Order Fee"
                  value={CODPercentage.percentage}
                />
                <br />
                <div class="div">
                  <span>Shopify Payments - iDeal Gateway:</span> If you accept
                  payments through iDeal with Shopify Payments in the
                  Netherlands. Select "True". This will account for the flat
                  rate 0.29 cents per transaction for payments received through
                  iDeal with Shopify Payments.
                </div>
                <select class="custom-select" id="nl-gateway-selector">
                  <option value="true">True</option>
                  <option value="false" selected>
                    False
                  </option>
                </select>
                <br />
                <br />
                <button
                  class="btn-outline-success btn-lg"
                  id="submit-gateway-settings"
                >
                  <i class="fa fa-paper-plane"></i> Update Other Settings
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatewaySettings;
