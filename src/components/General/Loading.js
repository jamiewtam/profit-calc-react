import React from "react";

const Loading = () => {
  return (
    <div className="overlay" id="loading">
      <div className="overlay__inner">
        <div className="overlay__content">
          <span className="spinner"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
