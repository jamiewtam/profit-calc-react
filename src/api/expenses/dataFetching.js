import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import momentTimeZone from "moment-timezone";

//CREATE MONTHLY EXPENSE OR REPEATING MONTHLY EXPENSE -------------------------------------

export const createNewExpenseItem = async (
  expenseName,
  expenseAmount,
  expenseDate
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createExpense",
      data: {
        name: expenseName,
        amount: expenseAmount,
        expenseDate,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your Expense Has Been Saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

export const createRepeatingExpenseItem = async (expenseArr) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/createRepeatingExpense",
      data: {
        expenseArr,
      },
    });
    if (res.data.status === "success") {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your Expense Has Been Saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

//EDIT MONTHLY EXPENSE OR REPEATING MONTHLY EXPENSE -------------------------------------
export const editTableExpense = async (expenseId, newAmount) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/table/editExpense",
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
        timer: 2000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};

//DELETE MONTHLY EXPENSE OR REPEATING MONTHLY EXPENSE -------------------------------------
export const deleteTableExpense = async (expenseId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/table/deleteExpense",
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
        timer: 2000,
      });
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
};
