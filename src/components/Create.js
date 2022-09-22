import React, { useState }from 'react'
import { collection, addDoc} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import {useNavigate} from "react-router-dom"


const Create = () => {
    const [nombre, setNombre] = useState('');
    const [lote, setLote] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [fv, setFV] = useState('')
    const [stock, setStock] = useState(0)
    const navigate =useNavigate()
    const medCollection=collection(db,"medicamentos")

    const crear=async(e)=>{
        e.preventDefault()
        await addDoc(medCollection,{
            nombre:nombre,
            lote:lote,
            fabricante:fabricante,
            fv:fv,
            cantidad:stock        
        })
        navigate('/')
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
                        value={nombre}
                        onChange={(e)=>{setNombre(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese el Lote del Medicamento</label>
                        <input 
                        value={lote}
                        onChange={(e)=>{setLote(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese el Fabricante del Medicamento</label>
                        <input 
                        value={fabricante}
                        onChange={(e)=>{setFabricante(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese la Fecha de Vencimiento (AA-mm-dd) del Medicamento</label>
                        <input 
                        value={fv}
                        onChange={(e)=>{setFV(e.target.value)}}
                        type="text"
                        className='form-control'></input>
                        {/*  */}
                        <label>Ingrese la cantidad del Medicamento</label>
                        <input 
                        value={stock}
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

export default Create
