import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../DBConfig/supabase"
import Create from "../components/Create"
import Show from "../components/Show"
import firebase from "../DBConfig/firebase"


const Home = () => {
  const navigate=useNavigate()
  useEffect(() => {
    if(!supabase.auth.user()){
      navigate("/login")
    }
  }, [navigate])
  return (
    <div>
      <h1>Hola desde Home</h1>
      <Create/>
      <button
      className="btn btn-danger"
      onClick={()=>{supabase.auth.signOut()}}
      
      
      >Logout</button>
      
      

    </div>
  )
}

export default Home
