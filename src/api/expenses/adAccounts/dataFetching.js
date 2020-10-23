import axios from "axios";
import Swal from "sweetalert2";

// SELECT AD ACCOUNTS --------------------------

export const selectFbAdAccounts = async (selectedAdAccounts) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/selectFbAdAccounts",
      data: {
        newFbAccounts: selectedAdAccounts,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your Accounts Have Been Updated",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const updateAdwordsAccountID = async (adwordsAccountId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/adwordsAccount",
      data: {
        adwordsAccountId,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Adwords Account is now: ${adwordsAccountId}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const refreshAccessToken = async () => {
  try {
    const response = await axios({
      url: "http://localhost:9000/api/v1/microsoft/getNewAccessToken",
    });
    if (response.data.status === "success") {
      return "Completed";
    }
    if (response.data.status === "error") {
      Swal.fire({
        icon: "error",
        title: "Error With Your Bing Ads",
        html: `To Fix This Error. Please re-authenticate your Bing Ads by re-signing in  <a href="https://www.profitcalc.io/adlogins">HERE</a> or click the button below. If you have any questions or issues contact us.`,
        confirmButtonText:
          '<a href="https://www.profitcalc.io/adlogins" stye="color: white">Click Here to Re-Signin</a>',
        confirmButtonColor: "#ffffff",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// REMOVE AD ACCOUNTS

export const removeFacebook = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/removeFacebook",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Facebook Data Has Been Removed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const removeGoogle = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/removeGoogle",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Google Data Has Been Removed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const removeBing = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/removeBing",
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Bing Data Has Been Removed`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: `Please Try Again`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
