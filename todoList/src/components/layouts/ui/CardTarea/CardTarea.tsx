// CardTarea.tsx
import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { ITarea } from "../../../../types/ITodo";
import styles from "./CardTarea.module.css";
import { ModalVerTarea } from "../../../modals/ModalVerTarea/ModalVerTarea";
import Swal from "sweetalert2";
import { eliminarTareaById } from "../../../../http/todoList";
import { ModalEditarTarea } from "../../../modals/ModalEditarTarea/ModalEditarTarea";
import { taskStore } from "../../../../store/todoStore";

interface Props {
  tarea: ITarea;
}

export const CardTarea = ({ tarea }: Props) => {
  const eliminarUnaTarea = taskStore((state) => state.eliminarUnaTarea);

  const [modalShow, setModalShow] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<ITarea | null>(
    null
  );
  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleCloseModalEdit = () => setShowModalEdit(false);

  const handleEditarTarea = () => {
    setTareaSeleccionada(tarea);
    setShowModalEdit(true);
  };

  const handleVerTarea = () => {
    setTareaSeleccionada(tarea);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
    setTareaSeleccionada(null);
  };

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
        await eliminarTareaById(id);
        eliminarUnaTarea(id);
        Swal.fire("¡Eliminada!", "La tarea ha sido eliminada.", "success");
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar la tarea.", "error");
        console.error(error);
      }
    }
  };

  return (
    <>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <div className={styles.containerCard}>
            <h5 className={styles.cardTitle}>{tarea.titulo}</h5>
            <div className={styles.cardDescripcion}>{tarea.descripcion}</div>

            <ButtonGroup className="gap-2 mt-2">
              <Button
                variant="warning"
                size="sm"
                className="rounded-2"
                onClick={handleVerTarea}
              >
                <span className="material-symbols-outlined">visibility</span>
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="rounded-2"
                onClick={handleEditarTarea}
              >
                <span className="material-symbols-outlined">edit</span>
              </Button>
              <Button
                variant="danger"
                size="sm"
                className="rounded-2"
                onClick={() => handleEliminarTarea(tarea.id!)}
              >
                <span className="material-symbols-outlined">delete</span>
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>

      <ModalEditarTarea
        show={showModalEdit}
        tarea={tareaSeleccionada}
        handleClose={handleCloseModalEdit}
      />
      <ModalVerTarea
        show={modalShow}
        handleClose={handleClose}
        tarea={tareaSeleccionada}
      />
    </>
  );
};
