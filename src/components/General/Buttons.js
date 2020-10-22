import React from "react";
import { FaPaperPlane, FaWrench, FaTrash } from "react-icons/fa";

export const ButtonSuccess = ({ title, onClick, style }) => {
  return (
    <button
      className="btn-outline-success btn-lg"
      style={style}
      onClick={onClick}
    >
      <FaPaperPlane /> {title}
    </button>
  );
};

export const ButtonEdit = ({ title, onClick, style }) => {
  return (
    <button
      className="btn btn-outline-dark .btn-lg"
      style={style}
      onClick={onClick}
    >
      <FaWrench /> {title}
    </button>
  );
};

export const ButtonRemove = ({ title, onClick, style }) => {
  return (
    <button
      className="btn btn-outline-danger .btn-lg"
      style={style}
      onClick={onClick}
    >
      <FaTrash /> {title}
    </button>
  );
};
