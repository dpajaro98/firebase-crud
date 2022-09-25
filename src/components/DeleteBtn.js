import React from "react";
import { useMeds } from "../context/MedContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function DeleteBtn({ med }) {
    const mySwal=withReactContent(Swal)

  const { DeleteMed } = useMeds();

  const handleDelete = () => {
    mySwal.fire({
        title: 'Estas Seguro de Querer Eliminar este medicamento?',
        text: "Recuerda que este proceso no tiene vuelta atrás!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
            DeleteMed(med.id);
          Swal.fire(
            'Borrado!',
            'El Medicamento ha sido Borrado.',
            'Exitoso'
          )
        }
      })
    
  };

  return (
    <button onClick={() => handleDelete()} className="btn btn-danger">
      <i className="fa-sharp fa-solid fa-trash"> </i> Eliminar
    </button>
  );
}

export default DeleteBtn;
