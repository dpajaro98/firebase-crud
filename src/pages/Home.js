import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../DBConfig/supabase";

import { Link } from "react-router-dom";
import ShowSupabase from "../components/ShowSupabase";


const Home = () => {
 
  const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Hola desde Home</h1>
      <Link to="/create" className="btn btn-secondary mt-2 mb-2">
        Crear Medicamento
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Logout
      </button>
      <ShowSupabase></ShowSupabase>
    </div>
  );
};

export default Home;
