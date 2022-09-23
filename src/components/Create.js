import React, { useState }from 'react'
import {useNavigate} from "react-router-dom"
import { supabase } from '../DBConfig/supabase';



export default function Create() {

    const [nombre, setNombre] = useState('');
    const [lote, setLote] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [fv, setFV] = useState('');
    const [stock, setStock] = useState(0);
    const navigate =useNavigate()
    

    const crear = async(e)=>{
        e.preventDefault()
        try{
            const result = await supabase.from("medicamentos").insert({
                nombre:nombre,fabricante:fabricante,end_date:fv,lote:lote,stock:stock,
        })
            console.log(result)
            
        }
        catch(error){
            console.log(error);
        navigate('/')
    }
}

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h2>Crear Medicamento</h2>
                <form onSubmit={crear}>
                    <div className='mb-6'>
                        <label>Ingrese el Nombre del Medicamento</label>
                        <input 
                        name="nombre"
                        onChange={(e)=>{setNombre(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese el Lote del Medicamento</label>
                        <input 
                        name="lote"
                        onChange={(e)=>{setLote(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese el Fabricante del Medicamento</label>
                        <input 
                        name="fabricante"
                        onChange={(e)=>{setFabricante(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese la Fecha de Vencimiento del Medicamento</label>
                        <input 
                        name="fv"
                        onChange={(e)=>{setFV(e.target.value)}}
                        type="date"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese la cantidad del Medicamento</label>
                        <input 
                        name="stock"
                        onChange={(e)=>{setStock(e.target.value)}}
                        type="number"
                        className='form-control'></input>

                    </div>
                    <br></br>
                    <button
                    type='submit'
                    className='btn btn-success'
                    >
                        Crear Medicamento
                    </button>

                </form>

            </div>

        </div>
      
    </div>
  )
}