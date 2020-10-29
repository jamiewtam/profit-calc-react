/* eslint-disable*/
import Swal from "sweetalert2";
import moment from "moment";
import {
  renderCOGSByDateTableRoute,
  createNewCOGSByDateItem,
  editCOGSByDateTableExpense,
  deleteCOGSByDateTableExpense,
  changeCOGSByDateToggle,
} from "./dataFetching";

// UPDATE COGS BY DATE SETTINGS TOGGLE -------------------------------------
export const updateCOGSByDateToggle = () => {
  changeCOGSByDateToggle();
};

// RENDER Expense table on expense page -------------------------------------
export const renderCOGSByDateTable = () => {
  const startDateMonthlyExp = moment("1/1/1990").format();
  const endDateMonthlyExp = moment("1/1/2100").format();
  return renderCOGSByDateTableRoute(startDateMonthlyExp, endDateMonthlyExp);
};

// CREATE NEW COGS BY DATE -------------------------------------

export const createCOGSByDateItem = ({ expenseDate, amount }) => {
  const date = moment(expenseDate).format("YYYY-MM-DD");
  console.log("date:", date);
  const newAmount = parseFloat(amount);

  if (newAmount && date !== "Invalid date") {
    createNewCOGSByDateItem(newAmount, date);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter a Date and Amount",
    });
  }
};

//EDIT/DELETE EXPENSE ITEM FROM MONTHLY EXPENSE TABLE -------------------------------------
export const editCOGSByDateItem = (formattedID, amount) => {
  if (amount || amount === 0) {
    editCOGSByDateTableExpense(formattedID, amount);
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Enter In a Number",
    });
  }
};

export const deleteCOGSByDateItem = (formattedID) => {
  deleteCOGSByDateTableExpense(formattedID);
};
