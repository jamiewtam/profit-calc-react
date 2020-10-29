import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

export const SearchableTable = ({ products, columns }) => {
  return (
    <ToolkitProvider keyField="id" data={products} columns={columns} search>
      {(props) => {
        return (
          <div>
            <SearchBar {...props.searchProps} className="form-control" />
            <BootstrapTable
              {...props.baseProps}
              keyField="id"
              data={products}
              columns={columns}
              pagination={paginationFactory()}
            />
          </div>
        );
      }}
    </ToolkitProvider>
  );
};
