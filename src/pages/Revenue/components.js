import React from "react";
//COMPONENTS
import {
  ButtonSuccess,
  ButtonEdit,
  ButtonRemove,
} from "../../components/General/Buttons";
import { getFullFormattedDate } from "../../util/formatting/formatDates";

//HEADERS
export const submitRevenueByDateHeaders = ["Date", "Amount", ""];
export const allRevenueByDateHeaders = ["Date", "Amount", ""];

//REDUCER
export const RevenueByDateReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action,
      };
    case "RESET":
      return {
        amount: 0,
        expenseDate: "2020-01-01",
      };
    default:
      return state;
  }
};
//TABLE COMPONENTS
export const CreateNewRevenueByDate = ({
  handleChange,
  state,
  handleSubmit,
}) => {
  return (
    <tr className="table-row">
      <td>
        <input
          type="date"
          onChange={(event) => handleChange("expenseDate", event.target.value)}
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
export const RevenueByDateFromDB = ({
  RevenueByDateDB,
  handleRevenueByDateChange,
  handleRevenueByDateEdit,
  handleRevenueByDateDelete,
  timeZone,
}) => {
  return RevenueByDateDB.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{getFullFormattedDate(exp.date, timeZone)}</td>
        <td>
          <input
            defaultValue={exp.amount}
            onChange={(event) =>
              handleRevenueByDateChange(exp._id, event.target.value)
            }
          />
        </td>
        <td>
          <ButtonEdit
            style={{ marginRight: "10px" }}
            title="Edit"
            onClick={() => handleRevenueByDateEdit(exp._id, exp.amount)}
          />
          <ButtonRemove
            title="Remove"
            onClick={() => handleRevenueByDateDelete(exp._id)}
          />
        </td>
      </tr>
    );
  });
};
