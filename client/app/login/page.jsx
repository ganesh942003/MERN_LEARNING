

import React from 'react'
import ClientComponent from '@/components/Clientcomponent/ClientComponent'
import ServerComponent from '@/components/Servercomponent/ServerComponent'
import { GetObj } from '@/components/action/action'

const page = async() => {

  
  return (
    <>
 <ServerComponent>
  <ClientComponent/>
 </ServerComponent>
    <h1>Hello world</h1>
    
    </>
  )
}

export default page