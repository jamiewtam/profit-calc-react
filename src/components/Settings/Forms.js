import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const ToggleElement = ({ onChange, checked }) => {
  return (
    <BootstrapSwitchButton
      checked={checked}
      onlabel="Included in Dashboard"
      offlabel="Not Included in Dashboard"
      size="sm"
      onstyle="dark"
      width={215}
      onChange={onChange}
    />
  );
};

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
    <form style={{ margin: "15px 0" }}>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
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
    <form style={{ margin: "15px 0" }}>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
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

export const TrueOrFalseDropdown = ({
  title,
  selected,
  handleChange,
  selectorName,
}) => {
  return (
    <form style={{ margin: "15px 0" }}>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
        onChange={(event) => handleChange(selectorName, event.target.value)}
      >
        <option value={"true"}>True</option>
        <option value={"false"}>False</option>
      </select>
    </form>
  );
};

export const DashboardCustomizationDropdown = ({
  title,
  selected,
  handleChange,
  selectorName,
}) => {
  return (
    <form style={{ margin: "15px 0" }}>
      <label htmlFor={title}>{title}</label>
      <select
        defaultValue={selected}
        name={title}
        className="custom-select"
        onChange={(event) => handleChange(selectorName, event.target.value)}
      >
        <option value={"true"}>Display Under Top Section (Main Section)</option>
        <option value={"false"}>
          Display Under Bottom Section (Other Metrics)
        </option>
      </select>
    </form>
  );
};
