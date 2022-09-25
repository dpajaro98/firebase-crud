import { createContext, useContext, useState } from "react";
import { supabase } from "../DBConfig/supabase";

export const MedContext = createContext();

export const useMeds = () => {
  const context = useContext(MedContext);
  return context;
};

export const MedContextProvider = ({ children }) => {
  const [meds, setMeds] = useState([]);

  //funcion para obtener registros de supabase
  const getMeds = async () => {
    const user = supabase.auth.user();

    const { data, error } = await supabase
      .from("medicamentos")
      .select("*")
      .eq("userid", user.id);

    if (error) throw error;

    setMeds(data);
  };
  //funcion para eliminar medicamento

  const DeleteMed = async (id) => {
    const user = supabase.auth.user();

    const { data, error } = await supabase
      .from("medicamentos")
      .delete()
      .eq("userid", user.id)
      .eq("id", id);

    if (error) throw error;
    console.log(data);
  };
  

  return (
    <MedContext.Provider value={{ meds, getMeds, DeleteMed}}>
      {children}
    </MedContext.Provider>
  );
};
