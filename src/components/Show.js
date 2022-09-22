import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Show = () => {
  //1-configuramos los hooks
  const [meds, setMedicamento] = useState([]);
  //2- se referencia a la base de datos
  const medCollection = collection(db, "medicamentos");
  //3- funcion para traer o mostrar todos los documentos
  const getMeds = async () => {
    const data = await getDocs(medCollection);
    setMedicamento(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   
  };

  //4- funcion para eliminar un doc
  const deleteMed = async (id) => {
    const medDoc = doc(db, "medicamentos", id);
    await deleteDoc(medDoc);
    getMeds();
  };

  //5- funcion de confirmacion para sweet alert
  const confirm=





  //6- usamos useEffect
  useEffect(() => {
    getMeds();
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Crear
              </Link>
            </div>
            <table className="table table-datk table-hover">
              <thead>
                <tr>
                  <th>Vence en</th>
                  <th>nombre</th>
                  <th>fabricante</th>
                  <th>lote</th>
                  <th>cantidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {meds.map((med) => (
                  <tr key={med.id}>
                    <td>{med.fv}</td>
                    <td>{med.nombre}</td>
                    <td>{med.fabricante}</td>
                    <td>{med.lote}</td>
                    <td>{med.cantidad}</td>
                    <td>
                      {/* <link to={`/edit/${med.id}`}> Editar</link> */}
                      <Link
                        className="btn btn-primary"
                        role="button"
                        to={`/edit/${med.id}`}
                        
                      >
                        Button1
                      </Link>

                      <button
                        onClick={() => deleteMed(med.id)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
