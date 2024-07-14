"use client"
import { useState } from 'react';
import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
const NestedComponent = ({rowData}) => {
    const [colDefs, setColDefs] = useState([
        { field: "username" },
        { field: "age" },
     
      ]);
  return (
    <>
     <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
   />
    </>
  )
}

export default NestedComponent