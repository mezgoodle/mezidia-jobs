import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Table = props => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  };

  for (const job of props.jobs.jobs) {
    data.rows.push({
      name: job.id,
      position: job.userId,
      office: job.title,
      age: job.completed.toString(),
      date: job.id,
      salary: <Router><Link to="/navbar">{job.id}</Link></Router>,
    });
  }

  return (
    <MDBDataTable
      bordered
      hover
      data={data}
    />
  );
};

export default Table;