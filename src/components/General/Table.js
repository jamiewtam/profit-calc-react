import React from "react";

export const Table = ({ children }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered first">{children}</table>
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
  return <tbody className="expense-page-table">{children}</tbody>;
};

export const SortableTable = ({ children }) => {
  return (
    <div className="table-responsive">
      <table
        className="table table-bordered first"
        data-toggle="table"
        data-search="true"
        data-pagination="true"
        data-page-list="[10, 50, 100, 500]"
        data-group-by="true"
        data-group-by-field="product-name"
        data-page-size="50"
      >
        {children}
      </table>
    </div>
  );
};

export const SortableTableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => {
          return (
            <th data-sortable="true" key={head}>
              {head}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
