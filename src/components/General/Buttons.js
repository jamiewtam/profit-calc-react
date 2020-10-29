import React from "react";
import {
  FaPaperPlane,
  FaSignOutAlt,
  FaWrench,
  FaTrash,
  FaSync,
} from "react-icons/fa";

export const ButtonSuccess = ({ title, onClick, style }) => (
  <button
    className="btn-outline-success btn-lg"
    style={style}
    onClick={onClick}
  >
    <FaPaperPlane /> {title}
  </button>
);

export const ButtonEdit = ({ title, onClick, style }) => (
  <button
    className="btn btn-outline-dark .btn-lg"
    style={style}
    onClick={onClick}
  >
    <FaWrench /> {title}
  </button>
);

export const ButtonRemove = ({ title, onClick, style }) => (
  <button
    className="btn btn-outline-danger .btn-lg"
    style={style}
    onClick={onClick}
  >
    <FaTrash /> {title}
  </button>
);

export const ButtonAddAdAccount = ({ title, style, onClick }) => (
  <button className="btn-outline-light btn-lg" style={style} onClick={onClick}>
    <FaPaperPlane /> {title}
  </button>
);

export const ButtonRemoveAdAccount = ({ title, style, onClick }) => (
  <button className="btn-outline-light btn-lg" style={style} onClick={onClick}>
    <FaSignOutAlt /> {title}
  </button>
);

export const ButtonSync = ({ title, buttonClass, style, onClick }) => (
  <button className={`${buttonClass} btn-lg`} style={style} onClick={onClick}>
    <FaSync /> {title}
  </button>
);
