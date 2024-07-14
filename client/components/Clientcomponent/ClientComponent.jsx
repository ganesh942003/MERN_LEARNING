"use client"
import React, { useEffect,useState } from 'react'
import {GetObj} from '../action/action'
import { postObj } from '../action/action'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import NestedComponent from '../NestedComponent/NestedComponent'
const ClientComponent = ({children,rowData,secondData}) => {
  
  // const [rowData, setRowData] = useState([
  //   { name: "Tesla",age:4},
  //   { name: "Ford", age:3},
  //   { name: "Toyota",age:2},
  // ]);
  
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "username" },
    { field: "age" },
 
  ]);
 

    
  return (
    <>
   <div
   
  className="ag-theme-quartz" // applying the Data Grid theme
  style={{ height: 500 }} // the Data Grid will fill the size of the parent container
 >
     <button className='mt-30' onClick={async()=>{
const response=await postObj("Testing3",40)

   }}>server</button>
   <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
   />
<NestedComponent rowData={secondData}/>
 </div>
    </>
  )
}

export default ClientComponent