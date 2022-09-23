import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../DBConfig/firebase";
import { getDoc, updateDoc, doc } from "firebase/firestore";

const Edit = () => {
  const [nombre, setNombre] = useState("");
  const [lote, setLote] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [fv, setFV] = useState("");
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update=async (e)=>{
    e.preventDefault()
    const med=doc(db,"medicamentos",id)
    const data = {nombre:nombre,
        lote:lote,
        fabricante:fabricante,
        fv:fv,
        cantidad:stock}

    await updateDoc(med,data)
    navigate ('/')
  }
  const getMedById =async (id)=>{
    const med= await getDoc(doc(db,"medicamentos",id))
    if(med.exists()){
        console.log(med.data())
    }
    else{
        console.log("este producto no existe")
    }
  }

  return <div></div>;
};

export default Edit;
