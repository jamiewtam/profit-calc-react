import Swal from "sweetalert2";
import { updateCJShippingAccessToken } from "./dataFetching";

export const submitCJShippingAccessToken = (newCJShippingAccessToken) => {
  if (newCJShippingAccessToken.length === 32) {
    // Send POST request to update the ID
    updateCJShippingAccessToken(newCJShippingAccessToken);
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Your CJ Shipping API Key must be 32 characters (no spaces)",
    });
  }
};
