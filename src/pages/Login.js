import React, { useState } from 'react'
import { supabase } from '../DBConfig/supabase'


const Login = () => {
    const [email,setEmail]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const result= await supabase.auth.signIn({
                email,
            });
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Ingrese Su Email
            </label>
            <br></br>
            <input 
            type="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            >
            </input>
            <br></br>
            <button className='btn btn-primary'>enviar codigo</button>
        </form>
      
    </div>
  )
}

export default Login
