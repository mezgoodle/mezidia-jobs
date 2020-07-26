import React from "react";
import { MDBDataTable } from 'mdbreact';

const Table = props => {
  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
};

export default Table;