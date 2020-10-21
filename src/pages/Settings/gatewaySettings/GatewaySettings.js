import React from "react";

import { userContext } from "../../../util/Context/userContext";

import PageContainer from "../../../Layouts/Pages/PageContainer";

import { submitGatewaySettings } from "../../../api/settings/settingsPages/gatewaySettings";

import { formatPercentage } from "../../../util/formatting/formatNumbers";

import {
  ExternalGateway,
  GatewayFeesCard,
  OtherSettings,
} from "./gatewayComponents";

const GatewaySettings = () => {
  const user = React.useContext(userContext);

  const [shopifyFees, setShopifyFees] = React.useState({
    percentage: formatPercentage(user.shopifyCardFee),
    fixedFee: user.shopifyCardFeeFixed,
  });

  const [paypalFees, setPaypalFees] = React.useState({
    percentage: formatPercentage(user.paypalCardFee),
    fixedFee: user.paypalCardFeeFixed,
  });

  const [stripeFees, setStripeFees] = React.useState({
    percentage: formatPercentage(user.stripeCardFee),
    fixedFee: user.stripeCardFeeFixed,
  });

  const [externalGatewayFee, setExternalGatewayFee] = React.useState({
    percentage: formatPercentage(user.externalGatewayFee),
  });

  const [CODFee, setCODFee] = React.useState({
    fixedFee: user.cashOnDeliveryFee,
  });

  const handlePercentageChange = (title, percentage) => {
    switch (title) {
      case "shopify":
        return setShopifyFees({ ...shopifyFees, percentage });
      case "paypal":
        return setPaypalFees({ ...paypalFees, percentage });
      case "stripe":
        return setStripeFees({ ...stripeFees, percentage });
      case "external":
        return setExternalGatewayFee({ ...externalGatewayFee, percentage });
      default:
        break;
    }
  };

  const handleFixedFeeChange = (title, fixedFee) => {
    switch (title) {
      case "shopify":
        return setShopifyFees({ ...shopifyFees, fixedFee });
      case "paypal":
        return setPaypalFees({ ...paypalFees, fixedFee });
      case "stripe":
        return setStripeFees({ ...stripeFees, fixedFee });
      case "cod":
        return setCODFee({ ...CODFee, fixedFee });
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await submitGatewaySettings(
      shopifyFees,
      paypalFees,
      stripeFees,
      externalGatewayFee,
      CODFee
    );
  };

  return (
    <PageContainer pageTitle="Gateway Settings">
      <GatewayFeesCard
        feeName="shopify"
        state={shopifyFees}
        percentageChange={handlePercentageChange}
        fixedFeeChange={handleFixedFeeChange}
        handleSubmit={handleSubmit}
        title="Shopify Fees"
      />

      <GatewayFeesCard
        feeName="paypal"
        state={paypalFees}
        percentageChange={handlePercentageChange}
        fixedFeeChange={handleFixedFeeChange}
        handleSubmit={handleSubmit}
        title="Paypal Fees"
      />

      <GatewayFeesCard
        feeName="stripe"
        state={stripeFees}
        percentageChange={handlePercentageChange}
        fixedFeeChange={handleFixedFeeChange}
        handleSubmit={handleSubmit}
        title="Stripe Fees"
      />

      <ExternalGateway
        feeName="external"
        state={externalGatewayFee}
        percentageChange={handlePercentageChange}
        handleSubmit={handleSubmit}
        title="External Gateway Fee"
      />

      <OtherSettings
        feeName="cod"
        state={CODFee}
        fixedFeeChange={handleFixedFeeChange}
        handleSubmit={handleSubmit}
        title="Other Gateway Settings"
      />
    </PageContainer>
  );
};

export default GatewaySettings;
