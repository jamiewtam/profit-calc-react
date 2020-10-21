import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export const ButtonSuccess = ({ title, onClick }) => {
    return (
        <button
            className="btn-outline-success btn-lg"
            style={{ marginTop: "20px" }}
            onClick={onClick}
        >
            <FaPaperPlane /> {title}
        </button>
    )
}
