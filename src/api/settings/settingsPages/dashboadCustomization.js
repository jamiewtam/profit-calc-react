import { updateDashboardSettings } from "./dataFetching/dataFetching";

export const submitDashboardSettings = ({
  numberOfOrdersSelector,
  taxesCollectedSelector,
  shippingChargedSelector,
  profitMarginSelector,
  cashbackDashboardSelector,
  shopifyLoanDashboardSelector,
}) => {
  //2. Send Axios request
  updateDashboardSettings(
    numberOfOrdersSelector,
    taxesCollectedSelector,
    shippingChargedSelector,
    profitMarginSelector,
    cashbackDashboardSelector,
    shopifyLoanDashboardSelector
  );
};
