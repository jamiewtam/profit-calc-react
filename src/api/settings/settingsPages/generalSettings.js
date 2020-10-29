import Swal from "sweetalert2";

import { updateGeneralSettings } from "./dataFetching/dataFetching";

export const submitGeneralSettings = ({
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
}) => {
  // 1. Check if numbers entered are both numbers

  // Replace percentage for cashback selector if there
  const cashBackSelector = cashBack
    .toString()
    .replace("%", "")
    .replace(/,/g, ".");
  // Replace percentage for Shopify Loan
  const shopifyLoanSelector = shopifyLoan
    .toString()
    .replace("%", "")
    .replace(/,/g, ".");

  const customOrderExpSelector = customOrderExp.toString().replace(/,/g, ".");
  const extraShopifyCostPerItemSelector = shopifyCostPerItemExtraCost
    .toString()
    .replace(/,/g, ".");

  // 2. Send data if valid

  if (
    (parseFloat(cashBackSelector) || parseFloat(cashBackSelector) === 0) &&
    (parseFloat(customOrderExpSelector) ||
      parseFloat(customOrderExpSelector) === 0) &&
    (parseFloat(shopifyLoanSelector) ||
      parseFloat(shopifyLoanSelector) === 0) &&
    (parseFloat(extraShopifyCostPerItemSelector) ||
      parseFloat(extraShopifyCostPerItemSelector) === 0)
  ) {
    const updatedCashback = parseFloat(Math.abs(cashBackSelector)) / 100;

    const updatedShopifyLoan = parseFloat(Math.abs(shopifyLoanSelector)) / 100;

    const updateCustomOrderExp = parseFloat(Math.abs(customOrderExpSelector));

    const updateExtraShopifyCostPerItem = parseFloat(
      Math.abs(extraShopifyCostPerItemSelector)
    );

    const updatedCurrencySymbol = currencySymbol;

    // Ad account currency symbols
    const updatedAdAccountBaseCurrency = adAccountBaseCurrency;
    const updatedAdAccountCurrency = adAccountCurrency;

    // Aliexpress Currency Symbols
    const updatedAliexpressBaseCurrency = aliexpressBaseCurrency;
    const updatedAliexpressCurrency = aliexpressCurrency;

    //Aliexpress comma selector
    const updatedAliexpressCommaSelector = aliexpressComma;

    // CJ Dropshipping Currency Symbols
    const updatedCJBaseCurrency = CJBaseCurrency;
    const updatedCJCurrency = CJCurrency;

    //Get Time Zone
    const updatedTimeZone = timeZone;

    // Filter by paid selector
    const updatedFilterByPaidSelector = filterByPaid;

    // Filter by paid selector
    const updatedEditOrdersFrequentlySelector = editOrdersFrequently;

    if (
      isNaN(updateCustomOrderExp) ||
      isNaN(updateCustomOrderExp) ||
      isNaN(updatedShopifyLoan) ||
      isNaN(updateExtraShopifyCostPerItem)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          "Some of Your Updated Settings Were Entered in the Incorrect Format. All Settings Are Updated at Once. Please Check the Entire Page.",
      });
    } else {
      const updateAdAccountConversion = 1;
      updateGeneralSettings(
        updatedCashback,
        updateAdAccountConversion,
        updateCustomOrderExp,
        updatedCurrencySymbol,
        updatedShopifyLoan,
        updatedTimeZone,
        updateExtraShopifyCostPerItem,
        updatedAdAccountBaseCurrency,
        updatedAdAccountCurrency,
        updatedAliexpressBaseCurrency,
        updatedAliexpressCurrency,
        updatedAliexpressCommaSelector,
        updatedCJBaseCurrency,
        updatedCJCurrency,
        updatedFilterByPaidSelector,
        updatedEditOrdersFrequentlySelector
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
