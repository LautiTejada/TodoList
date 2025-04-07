import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { taskStore } from "../../store/todoStore";
import { ITarea } from "../../types/ITodo";
import styles from "./CardTarea.module.css";
import { ModalVerTarea } from "../modals/ModalVerTarea/ModalVerTarea";

export const CardTarea = () => {
  const tareas = taskStore((state) => state.tareas);

  const [modalShow, setModalShow] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<ITarea | null>(
    null
  );

  const handleVerTarea = (tarea: ITarea) => {
    setTareaSeleccionada(tarea);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
    setTareaSeleccionada(null);
  };

  return (
    <div className={styles.tareasContainer}>
      {tareas.map((tarea: ITarea) => (
        <Card key={tarea.id} className={styles.card}>
          <Card.Body className={styles.cardBody}>
            <div className={styles.containerCard}>
              <h5 className={styles.cardTitle}>{tarea.titulo}</h5>

              <div className={styles.cardDescripcion}>{tarea.descripcion}</div>

              <ButtonGroup className="gap-2 mt-2">
                <Button
                  variant="warning"
                  size="sm"
                  className="rounded-2"
                  onClick={() => handleVerTarea(tarea)}
                >
                  <span className="material-symbols-outlined">visibility</span>
                </Button>
                <Button variant="primary" size="sm" className="rounded-2">
                  <span className="material-symbols-outlined">edit</span>
                </Button>
                <Button variant="danger" size="sm" className="rounded-2">
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      ))}

      <ModalVerTarea
        show={modalShow}
        handleClose={handleClose}
        tarea={tareaSeleccionada}
      />
    </div>
  );
};
