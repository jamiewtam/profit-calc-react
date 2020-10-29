import axios from "axios";
import Swal from "sweetalert2";

export const renderRevenueByDateTableRoute = async (startDate, endDate) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/renderRevenueByDateTable",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      const expenses = res.data.data.revenueByDateExpenses;
      const sortedExpenses = expenses.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      return sortedExpenses;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

// END: CREATE LIST OF REvenue EXPENSES ----------------------------------------------

// START: AXIOS ROUTES FOR CREATING, EDITING, AND DELETING ----------------------------------------------
export const createNewRevenueByDateItem = async (expenseAmount, date) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createNewRevenueByDate",
      data: {
        amount: expenseAmount,
        date,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your Revenue Item Has Been Saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const editRevenueByDateTableExpense = async (expenseId, newAmount) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/editRevenueByDate",
      data: {
        expenseId,
        newAmount,
      },
    });

    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Revenue is Now ${res.data.data.newAmount}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const deleteRevenueByDateTableExpense = async (expenseId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/deleteRevenueByDate",
      data: {
        expenseId,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Revenue Deleted`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
//END: AXIOS ROUTES FOR CREATING, EDITING, AND DELETING ----------------------------------------------

export const changeRevenueByDateToggle = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/updateRevenueByDateToggle",
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
