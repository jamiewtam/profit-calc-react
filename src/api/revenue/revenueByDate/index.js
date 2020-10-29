/* eslint-disable*/
import Swal from "sweetalert2";
import moment from "moment";
import {
  renderRevenueByDateTableRoute,
  createNewRevenueByDateItem,
  editRevenueByDateTableExpense,
  deleteRevenueByDateTableExpense,
  changeRevenueByDateToggle,
} from "./dataFetching";

// UPDATE COGS BY DATE SETTINGS TOGGLE -------------------------------------
export const toggleRevenueByDate = () => {
  changeRevenueByDateToggle();
};

// RENDER Expense table on expense page -------------------------------------
export const renderRevenueByDateTable = () => {
  const startDateMonthlyExp = moment("1/1/1990").format();
  const endDateMonthlyExp = moment("1/1/2100").format();
  return renderRevenueByDateTableRoute(startDateMonthlyExp, endDateMonthlyExp);
};

// CREATE NEW Revenue BY DATE -------------------------------------
export const createNewRevenueByDate = ({ amount, expenseDate }) => {
  const date = moment(expenseDate).format("YYYY-MM-DD");
  if (amount && date !== "Invalid date") {
    createNewRevenueByDateItem(amount, date);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter a Date and Amount",
    });
  }
};

//EDIT EXPENSE ITEM FROM MONTHLY EXPENSE TABLE -------------------------------------
export const editRevenueByDate = (formattedID, newAmount) => {
  if (newAmount || newAmount === 0) {
    editRevenueByDateTableExpense(formattedID, newAmount);
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Enter In a Number",
    });
  }
};

//DELETE EXPENSE ITEM FROM MONTHLY EXPENSE TABLE -------------------------------------
export const deleteRevenueByDate = (formattedID) => {
  deleteRevenueByDateTableExpense(formattedID);
};
