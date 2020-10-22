import Swal from "sweetalert2";

import { updateVATSettings } from "./dataFetching/dataFetching";

export const submitVATSettings = ({
  VATSelector,
  VATManualPercentage,
  VATAutoCalculatedForShipping,
  COGSVATSelector,
  COGSVATManualPercentage,
  facebookVATSelector,
  facebookVATManualPercentage,
}) => {
  // Replace percentage for VAT Manual Percentage
  const VATManualPercentageSelector = VATManualPercentage.replace("%", "");
  const COGSVATManualPercentageSelector = COGSVATManualPercentage.replace(
    "%",
    ""
  );
  const facebookVATManualPercentageSelector = facebookVATManualPercentage.replace(
    "%",
    ""
  );

  // 2. Send data if valid

  if (
    (parseFloat(VATManualPercentageSelector) ||
      parseFloat(VATManualPercentageSelector) === 0) &&
    (parseFloat(COGSVATManualPercentageSelector) ||
      parseFloat(COGSVATManualPercentageSelector) === 0) &&
    (parseFloat(facebookVATManualPercentageSelector) ||
      parseFloat(facebookVATManualPercentageSelector) === 0)
  ) {
    //VAT Selectors
    const updatedVATSelector = VATSelector;
    const updatedVATAutoShippingSelector = VATAutoCalculatedForShipping;

    const updatedVATManualPercentage =
      parseFloat(Math.abs(VATManualPercentageSelector)) / 100;

    const updatedCOGSVATManualPercentage =
      parseFloat(Math.abs(COGSVATManualPercentageSelector)) / 100;

    const updatedCOGSVATSelector = COGSVATSelector;

    const updatedFacebookVATManualPercentage =
      parseFloat(Math.abs(facebookVATManualPercentageSelector)) / 100;

    const updatedFacebookVATSelector = facebookVATSelector;

    if (
      isNaN(updatedVATManualPercentage) ||
      isNaN(updatedCOGSVATManualPercentage) ||
      isNaN(updatedFacebookVATManualPercentage)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          "Some of Your Updated Settings Were Entered in the Incorrect Format. All Settings Are Updated at Once. Please Check the Entire Page.",
      });
    } else {
      updateVATSettings(
        updatedVATSelector,
        updatedVATAutoShippingSelector,
        updatedVATManualPercentage,
        updatedCOGSVATSelector,
        updatedCOGSVATManualPercentage,
        updatedFacebookVATSelector,
        updatedFacebookVATManualPercentage
      );
    }

    //3. If Data not value send an error
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text:
        "Some of Your Updated Settings Were Entered in the Incorrect Format. All Settings Are Updated at Once. Please Check the Entire Page.",
    });
  }
};
