import axios from "axios";
import Swal from "sweetalert2";

// UPDATE COGS TOGGLE

export const changeCOGSByDateToggle = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/updateCOGSByDateToggle",
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

export const renderCOGSByDateTableRoute = async (startDate, endDate) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/renderCOGSByDateTable",
      data: {
        startDate,
        endDate,
      },
    });
    if (res.data.status === "success") {
      const expenses = res.data.data.COGSByDateExpenses;
      const sortedExpenses = expenses.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      return sortedExpenses;
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    return [];
  }
};

// END: CREATE LIST OF ALL COGS EXPENSES ----------------------------------------------

// START: AXIOS ROUTES FOR CREATING, EDITING, AND DELETING ----------------------------------------------
export const createNewCOGSByDateItem = async (expenseAmount, date) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createNewCOGSByDate",
      data: {
        amount: expenseAmount,
        date,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your Expense Has Been Saved",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 1000,
    });
  }
};

export const editCOGSByDateTableExpense = async (expenseId, newAmount) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/editCOGSByDate",
      data: {
        expenseId,
        newAmount,
      },
    });

    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your Expense is Now ${res.data.data.newAmount}`,
        showConfirmButton: false,
        timer: 700,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 500,
    });
  }
};

export const deleteCOGSByDateTableExpense = async (expenseId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/deleteCOGSByDate",
      data: {
        expenseId,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Expense Deleted`,
        showConfirmButton: false,
        timer: 500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    Swal.fire({
      position: "top",
      icon: "error",
      title: "There was an error saving your changes",
      showConfirmButton: false,
      timer: 1000,
    });
  }
};
//END: AXIOS ROUTES FOR CREATING, EDITING, AND DELETING ----------------------------------------------
