'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import axios from 'axios';

import React from 'react'

const action = async(WrappedComponent) => {
   

      return <WrappedComponent {...props} />;
  
}

export default action
 
export async function createPost(id) {
    
      
      

  
//   redirect(`/post/${id}`) // Navigate to the new post page
}