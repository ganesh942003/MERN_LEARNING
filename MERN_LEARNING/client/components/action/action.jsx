
"use server"
import { revalidatePath } from 'next/cache'
import { unstable_cache } from 'next/cache'
import axios from 'axios'
export const GetObj= async() => {
    const url=process.env.ENV1

    try{
        
        const data=await axios.get(`${process.env.ENV1}/dashboard/object`)
        
       return data

}
    catch(err){
        console.log(err)   
    }
}

export async function postObj(name,age){
    const url=process.env.ENV1
    try{
        
        await axios.post(`${process.env.ENV1}/dashboard/object`,{
            username:name,
            age:age
        })
    }
    
    catch(err){
        console.log(err)
        
    }
    
    revalidatePath('/login')
}
