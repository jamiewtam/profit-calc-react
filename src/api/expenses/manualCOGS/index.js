import Swal from "sweetalert2";

import { updateCOGSRoute } from "./dataFetching";

export const updateManualCOGSItem = (
  productVariantID,
  newProductCost,
  newProductShippingCost
) => {
  if (
    (parseFloat(newProductCost) || newProductCost == 0) &&
    (parseFloat(newProductShippingCost) || newProductShippingCost == 0)
  ) {
    updateCOGSRoute(productVariantID, newProductCost, newProductShippingCost);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter a Number.",
    });
  }
};

export {
  getAllManualCOGS,
  syncAllProductsRedis,
  syncAllShopifyCostPerItemRedis,
  toggleCOGSByDate,
  toggleManualCOGS,
} from "./dataFetching";
