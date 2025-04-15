import { Button, Card } from "react-bootstrap";
import styles from "./CardSprint.module.css";
import { ISprint } from "../../../../types/ITodo";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ModalVerSprint } from "../../../modals/ModalVerSprint/ModalVerSprint";
import Swal from "sweetalert2";
import { eliminarSprintById } from "../../../../http/sprintList";
import { sprintStore } from "../../../../store/sprintStore";


interface CardSprintProps {
  sprint : ISprint
}


export const CardSprint = ({sprint} : CardSprintProps) => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/sprints/${sprint.id}`, { state: { sprint } });
  };


  const [modalShowSprint, setModalShowSprint] = useState(false);
  const handleShowModalSprint = () => {
    setModalShowSprint(!modalShowSprint);
  };

  const eliminarUnSprint = sprintStore((state) => state.eliminarUnSprint);
  
  const handleEliminarTarea = async (id: string) => {
      const resultado = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });
  
      if (resultado.isConfirmed) {
        try {
          await eliminarSprintById(id); 
          eliminarUnSprint(id); 
          Swal.fire("¡Eliminada!", "La tarea ha sido eliminada.", "success");
        } catch (error) {
          Swal.fire("Error", "No se pudo eliminar la tarea.", "error");
          console.error(error);
        }
      }
    };
  
  

  return (
    <>
      <div className={styles.cardSprintContainer}>
        <Card
          style={{
            width: "18rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          className="mb-2"
          onClick={handleNavigate}
          
        >
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.cardSprintTitle}>
              {" "}
              {sprint.nombre}{" "}
            </Card.Title>
            <Card.Text className={styles.cardContainer}>
              <p>Fecha de inicio: {sprint.fechaInicio}</p>
              <p>Fecha de cierre: {sprint.fechaCierre}</p>
            </Card.Text>
            <div className={styles.cardButtons}>
              <Button className="d-flex align-items-center" variant="warning">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowModalSprint();
                  }}
                >
                  visibility
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="primary">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  edit
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="danger">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEliminarTarea(sprint.id!)
                  }}
                >
                  delete
                </span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <ModalVerSprint show={modalShowSprint} handleClose={handleShowModalSprint} sprint={sprint} ></ModalVerSprint>
      
    </>
  );
  }; 

