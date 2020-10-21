import Swal from "sweetalert2";

import { updateGatewaySettings } from "./dataFetching/dataFetching";

export const submitGatewaySettings = (
  shopifyFees,
  paypalFees,
  stripeFees,
  externalGatewayFee,
  CODFee
) => {
  const ShopifyFeePercentage = shopifyFees.percentage
    .replace("%", "")
    .replace(/,/g, ".");

  const PaypalFeePercentage = paypalFees.percentage
    .replace("%", "")
    .replace(/,/g, ".");

  const StripeFeePercentage = stripeFees.percentage
    .replace("%", "")
    .replace(/,/g, ".");

  const ExternalGatewayFeePercentage = externalGatewayFee.percentage
    .replace("%", "")
    .replace(/,/g, ".");

  // Get fixed fee values
  const updatedShopifyFeeFixed = parseFloat(
    shopifyFees.fixedFee.toString().replace(/,/g, ".")
  );
  const updatedPaypalFeeFixed = parseFloat(
    paypalFees.fixedFee.toString().replace(/,/g, ".")
  );
  const updatedStripeFeeFixed = parseFloat(
    stripeFees.fixedFee.toString().replace(/,/g, ".")
  );

  const updatedCashOnDeliveryFeeFixed = parseFloat(
    CODFee.fixedFee.toString().replace(/,/g, ".")
  );

  if (
    (parseFloat(ShopifyFeePercentage) ||
      parseFloat(ShopifyFeePercentage) === 0) &&
    (parseFloat(PaypalFeePercentage) ||
      parseFloat(PaypalFeePercentage) === 0) &&
    (parseFloat(StripeFeePercentage) ||
      parseFloat(StripeFeePercentage) === 0) &&
    (parseFloat(ExternalGatewayFeePercentage) ||
      parseFloat(ExternalGatewayFeePercentage) === 0) &&
    (parseFloat(updatedShopifyFeeFixed) ||
      parseFloat(updatedShopifyFeeFixed) === 0) &&
    (parseFloat(updatedPaypalFeeFixed) ||
      parseFloat(updatedPaypalFeeFixed) === 0) &&
    (parseFloat(updatedStripeFeeFixed) ||
      parseFloat(updatedStripeFeeFixed) === 0) &&
    (parseFloat(updatedCashOnDeliveryFeeFixed) ||
      parseFloat(updatedCashOnDeliveryFeeFixed) === 0)
  ) {
    const updatedShopifyFeePercentage =
      parseFloat(Math.abs(ShopifyFeePercentage)) / 100;

    const updatedPaypalFeePercentage =
      parseFloat(Math.abs(PaypalFeePercentage)) / 100;

    const updatedStripeFeePercentage =
      parseFloat(Math.abs(StripeFeePercentage)) / 100;

    const updatedExternalGatewayFee =
      parseFloat(Math.abs(ExternalGatewayFeePercentage)) / 100;

    if (
      isNaN(updatedShopifyFeePercentage) ||
      isNaN(updatedPaypalFeePercentage) ||
      isNaN(updatedStripeFeePercentage) ||
      isNaN(updatedExternalGatewayFee)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          "Some of Your Updated Settings Were Entered in the Incorrect Format. All Settings Are Updated at Once. Please Check the Entire Page.",
      });
    } else {
      const updatedNLGateway = false;

      updateGatewaySettings(
        updatedShopifyFeePercentage,
        updatedPaypalFeePercentage,
        updatedStripeFeePercentage,
        updatedShopifyFeeFixed,
        updatedPaypalFeeFixed,
        updatedStripeFeeFixed,
        updatedExternalGatewayFee,
        updatedCashOnDeliveryFeeFixed,
        updatedNLGateway
      );
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text:
        "Some of Your Updated Settings Were Entered in the Incorrect Format. All Settings Are Updated at Once. Please Check the Entire Page.",
    });
  }
};
