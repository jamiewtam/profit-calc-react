import axios from "axios";
import Swal from "sweetalert2";

// UPDATE ALIEXPRESS TOGGLE

export const toggleAliexpress = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/updateAliexpressCOGS",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Settings Have Been Changed`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// UPDATE CJ Dropshipping Toggle

export const toggleCJDropshipping = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/CJ/updateSettingSwitch",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Settings Have Been Changed`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// CJ DROPSHIPPING

export const updateCJShippingAccessToken = async (
  updatedCJShippingAccessToken
) => {
  try {
    const response = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/CJ/updateAccessToken",
      data: {
        updatedCJShippingAccessToken,
      },
    });
    if (response.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your CJ Dropshipping API Key Has Been Updated.`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Error.",
      text: "There was an error updating your CJ Shipping Access Token",
    });
  }
};
