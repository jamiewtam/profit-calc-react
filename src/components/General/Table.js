import React from "react";

export const Table = ({ children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered first" id="user-id">
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ headers }) => {
  return (
    <thead className="thead-dark">
      <tr>
        {headers.map((head) => {
          return <th key={head}>{head}</th>;
        })}
      </tr>
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return (
    <tbody className="expense-page-table" id="expense-table-body">
      <tr className="table-row">{children}</tr>
    </tbody>
  );
};
