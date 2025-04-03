import { Card, Button, ButtonGroup } from "react-bootstrap";
import { taskStore } from "../../store/todoStore";
import { ITarea } from "../../types/ITodo";
import styles from "./CardTarea.module.css";

export const CardTarea = () => {
  // Obtener tareas del store
  const tareas = taskStore((state) => state.tareas);

  return (
    <div className={styles.tareasContainer}>
      {tareas.map((tarea: ITarea) => (
        <Card key={tarea.id} className={styles.card}>
          <Card.Body className={styles.cardBody}>
            <div className={styles.containerCard}>
              <Card.Title className={styles.cardTitle}>
                {tarea.titulo}
              </Card.Title>
              <Card.Text>{tarea.descripcion}</Card.Text>
              <ButtonGroup className="gap-2">
                <Button variant="warning" size="sm" className="rounded-2">
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
    </div>
  );
};
