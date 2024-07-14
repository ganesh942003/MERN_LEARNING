
import React from 'react'
import axios from 'axios'
import {GetObj} from '../action/action'
import { postObj } from '../action/action'
import { revalidatePath } from 'next/cache'
import dynamic from 'next/dynamic'
import ClientComponent from '../Clientcomponent/ClientComponent'


const ServerComponent = async({children}) => {
  const response=await GetObj()
const secondData=await GetObj()
const ThirdData=await GetObj()

 
  // const [rowData, setRowData] = [
  //   { name: "Tesla",age:4},
  //   { name: "Ford", age:3},
  //   { name: "Toyota",age:2},
  // ]);
  
  // Column Definitions: Defines the columns to be displayed.
  const colDefs=[
    { field: "name" },
    { field: "age" },
 
  ];

  return (
    <>
    <div>
 {<ClientComponent secondData={secondData.data} rowData={response.data}/>}   
    </div>
 
 <h1>Server component</h1>
    </>
  )
}

export default ServerComponent