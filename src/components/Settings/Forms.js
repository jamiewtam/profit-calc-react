import React from "react";

import { ButtonSuccess } from "../General/Buttons";

export const InputElement = ({ title, value, handleChange, feeName }) => {
  return (
    <React.Fragment>
      <label htmlFor="numberInput">{title}</label>
      <input
        onChange={(event) => handleChange(feeName, event.target.value)}
        name="numberInput"
        className="form-control"
        type="text"
        value={value}
        style={{ marginBottom: "10px" }}
      />
    </React.Fragment>
  );
};

export const SelectDropdown = ({ title, options }) => {
  return (
    <form>
      <label htmlFor={title}>{title}</label>
      <select name={title} className="custom-select" id="currency-symbol">
        {options.map((selector) => {
          return <option value={selector}>{selector}</option>;
        })}
      </select>
    </form>
  );
};
