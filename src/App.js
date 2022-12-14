import './App.css';

import Create from "./components/Create"
import { useEffect } from 'react';
import {Route,Routes,useNavigate} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import { supabase } from './DBConfig/supabase';
import Edit from './components/Edit';
import { MedContextProvider } from './context/MedContext';


function App() {
  const navigate=useNavigate()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate("/login")}else{
          navigate("/")
        }}
        
    )
  }, [navigate])

  return (
    <div className="App">
      <MedContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>

      </MedContextProvider>
     
      
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Show/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter> */}

     
    </div>
  );
}

export default App;
