import React, { useEffect } from "react";
import { useMeds } from "../context/MedContext";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

function ShowSupabase() {
  const { meds, getMeds } = useMeds();
  useEffect(() => {
    getMeds();
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-datk table-hover">
              <thead>
                <tr>
                  <th>Vence en</th>
                  <th>id</th>
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
                    <td>{med.end_date}</td>
                    <td>{med.id}</td>
                    <td>{med.nombre}</td>
                    <td>{med.fabricante}</td>
                    <td>{med.lote}</td>
                    <td>{med.stock}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        role="button"
                        to={`/edit/${med.id}`}
                        id={med.id}
                      >
                        <i className="fa-sharp fa-solid fa-pen-to-square"></i>{" "}
                        Editar
                      </Link>

                      <DeleteBtn med={med}></DeleteBtn>
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
}

export default ShowSupabase;
