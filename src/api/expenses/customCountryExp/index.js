import Swal from "sweetalert2";

import {
  toggleCustomCountryExpRoute,
  updateCustomCountryExpRoute,
} from "./dataFetching";

//UPDATE TOGGLE
export const toggleCustomCountryExp = () => {
  toggleCustomCountryExpRoute();
};

// UPDATE COST AND SHIPPING
export const updateCustomCountryExp = (
  countryName,
  customCountryProductCost,
  customCountryShippingCost
) => {
  if (
    (parseFloat(customCountryShippingCost) ||
      customCountryShippingCost === 0) &&
    (parseFloat(customCountryProductCost) || customCountryProductCost === 0)
  ) {
    updateCustomCountryExpRoute(
      countryName,
      customCountryProductCost,
      customCountryShippingCost
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter a Number.",
    });
  }
};
