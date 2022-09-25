import React, { useState} from "react";
import {supabase} from "../DBConfig/supabase";




const Edit = ({id}) => {

  const [meds, setMeds] = useState([]);

  
  const [nombre, setNombre] = useState("");
  const [lote, setLote] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [fv, setFV] = useState("");
  const [stock, setStock] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const getMeds = async () => {
  
    const { data, error } = await supabase
      .from("medicamentos")
      .select("*")
      .eq("id", id);

    if (error) throw error;

    setMeds(data);
  };

  const updateMed= async(e)=>{
    e.preventDefault();
    try {
      const user = supabase.auth.user();
      
      const result = await supabase.from("medicamentos").update({
        nombre: nombre,
        fabricante: fabricante,
        end_date: fv,
        lote: lote,
        stock: stock,
        userid: user.id,
      });
      console.log(result);
      

    } catch (error) {
      console.log(error);
      
    }
    
   
  }
  

  
  

  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <h2>Editar Medicamento</h2>
          <form onSubmit={updateMed}>
            <div className="mb-6">
              <label>Ingrese el Nombre del Medicamento</label>
              <input
                name="nombre"
                value={meds.nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                type="text"
                className="form-control"
              ></input>
              {/*  */}
              <label>Ingrese el Lote del Medicamento</label>
              <input
                name="lote"
                onChange={(e) => {
                  setLote(e.target.value);
                }}
                type="text"
                className="form-control"
              ></input>
              {/*  */}
              <label>Ingrese el Fabricante del Medicamento</label>
              <input
                name="fabricante"
                onChange={(e) => {
                  setFabricante(e.target.value);
                }}
                type="text"
                className="form-control"
              ></input>
              {/*  */}
              <label>Ingrese la Fecha de Vencimiento del Medicamento</label>
              <input
                name="fv"
                onChange={(e) => {
                  setFV(e.target.value);
                }}
                type="date"
                className="form-control"
              ></input>
              {/*  */}
              <label>Ingrese la cantidad del Medicamento</label>
              <input
                name="stock"
                onChange={(e) => {
                  setStock(e.target.value);
                }}
                type="number"
                className="form-control"
              ></input>
            </div>
            <br></br>
            <button type="submit" className="btn btn-success" >
              Crear Medicamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
              
}


export default Edit;
