import React from "react";
//COMPONENTS
import {
  ButtonSuccess,
  ButtonEdit,
  ButtonRemove,
} from "../../../components/General/Buttons";
import { getMonthAndYear } from "../../../util/formatting/formatDates";

//HEADERS
export const submitMonthlyExpenseHeaders = [
  "Expense Type",
  "Date",
  "Expense Name",
  "Amount",
  "",
];
export const allMonthlyExpensesHeaders = ["Date", "Expense Name", "Amount", ""];

//REDUCER
export const monthlyExpenseReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action,
      };
    case "RESET":
      return {
        name: "Name",
        amount: 0,
        expenseDate: "2020-01",
        expenseTypeValue: 1,
      };
    default:
      return state;
  }
};

// TABLE COMPONENTS
export const CreateNewMonthlyExpense = ({
  handleChange,
  state,
  handleSubmit,
}) => {
  return (
    <tr className="table-row">
      <td>
        <select
          defaultValue="1"
          className="custom-select"
          onChange={(event) =>
            handleChange("expenseTypeValue", event.target.value)
          }
        >
          <option value="1">One Time Expense</option>
          <option value="0" disabled="disabled">
            -- Repeating Expenses --
          </option>
          <option value="2">Repeat for 2 Months</option>
          <option value="3">Repeat for 3 Months</option>
          <option value="4">Repeat for 4 Months</option>
          <option value="5">Repeat for 5 Months</option>
          <option value="6">Repeat for 6 Months</option>
          <option value="7">Repeat for 7 Months</option>
          <option value="8">Repeat for 8 Months</option>
          <option value="9">Repeat for 9 Months</option>
          <option value="10">Repeat for 10 Months</option>
          <option value="11">Repeat for 11 Months</option>
          <option value="12">Repeat for 12 Months</option>
        </select>
      </td>
      <td>
        <input
          type="month"
          defaultValue="2020-01"
          onChange={(event) => handleChange("expenseDate", event.target.value)}
        />
      </td>
      <td>
        <input
          value={state.name}
          placeholder="Name"
          onChange={(event) => handleChange("name", event.target.value)}
        />
      </td>
      <td>
        <input
          placeholder="0"
          value={state.amount}
          onChange={(event) => handleChange("amount", event.target.value)}
        />
      </td>
      <td>
        <ButtonSuccess title="Submit" onClick={handleSubmit} />
      </td>
    </tr>
  );
};
export const MonthlyExpenseFromDB = ({
  monthlyExpDB,
  handleMonthlyExpChange,
  handleMonthlyExpEdit,
  handleMonthlyExpDelete,
}) => {
  return monthlyExpDB.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{getMonthAndYear(exp.expenseDate)}</td>
        <td>{exp.name}</td>
        <td>
          <input
            defaultValue={exp.amount}
            onChange={(event) =>
              handleMonthlyExpChange(exp._id, event.target.value)
            }
          />
        </td>
        <td>
          <ButtonEdit
            style={{ marginRight: "10px" }}
            title="Edit"
            onClick={() => handleMonthlyExpEdit(exp._id, exp.amount)}
          />
          <ButtonRemove
            title="Remove"
            onClick={() => handleMonthlyExpDelete(exp._id)}
          />
        </td>
      </tr>
    );
  });
};
