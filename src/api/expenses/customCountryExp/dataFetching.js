import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";

// SEND AXIOS REQUEST TO UPDATE COGS ONE EXPENSE --------------------

export const updateCustomCountryExpRoute = async (
  countryName,
  customCountryProductCost,
  customCountryShippingCost
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/updateCustomCountryExpSingle",
      data: {
        countryName,
        customCountryProductCost,
        customCountryShippingCost,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${res.data.data.countryName} 
        - Product Cost: ${res.data.data.customCountryProductCost} 
        - Shipping Cost: ${res.data.data.customCountryShippingCost}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: `There Was An Error Updating Your Expense. Please Try Again`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

// UPDATE Custom Country TOGGLE

export const toggleCustomCountryExpRoute = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/customCountry/updateSettingSwitch",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Settings Have Been Changed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};
