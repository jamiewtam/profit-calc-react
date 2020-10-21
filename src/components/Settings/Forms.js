import React from "react";

import { ButtonSuccess } from "../General/Buttons";

export const InputElement = ({ title, value, handleChange, inputName }) => {
  return (
    <React.Fragment>
      <label htmlFor="numberInput">{title}</label>
      <input
        onChange={(event) => handleChange(inputName, event.target.value)}
        name="numberInput"
        className="form-control"
        type="text"
        value={value}
        style={{ marginBottom: "10px" }}
      />
    </React.Fragment>
  );
};

export const SelectDropdown = ({
  title,
  options,
  selected,
  handleChange,
  selectorName,
}) => {
  return (
    <form>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
        id="currency-symbol"
        onChange={(event) => handleChange(selectorName, event.target.value)}
      >
        {options.map((selector) => {
          return (
            <option key={selector} value={selector}>
              {selector}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export const TimeZoneDropdown = ({
  title,
  options,
  selected,
  handleChange,
  selectorName,
}) => {
  return (
    <form>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
        id="currency-symbol"
        onChange={(event) => handleChange(selectorName, event.target.value)}
      >
        {options.map((selector) => {
          return (
            <option key={selector[0]} value={selector[0]}>
              {selector[1]}
            </option>
          );
        })}
      </select>
    </form>
  );
};
