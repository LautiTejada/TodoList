import { Button, ButtonGroup, Card } from "react-bootstrap";
import { ISprint } from "../../../types/ITodo";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import layout from "../../layouts/MainLayout.module.css";
import styles from "./SprintScreen.module.css";

export const SprintScreen = () => {
  const sprintsSimulados: ISprint[] = [
    {
      id: "1",
      nombre: "Sprint 1",
      fechaInicio: "2025-04-01",
      fechaCierre: "2025-04-15",
      tareas: [],
    },
    {
      id: "2",
      nombre: "Sprint 2",
      fechaInicio: "2025-04-16",
      fechaCierre: "2025-04-30",
      tareas: [],
    },
    {
      id: "3",
      nombre: "Sprint 3",
      fechaInicio: "2025-05-01",
      fechaCierre: "2025-05-15",
      tareas: [],
    },
    {
      id: "4",
      nombre: "Sprint 4",
      fechaInicio: "2025-05-16",
      fechaCierre: "2025-05-30",
      tareas: [],
    },
    {
      id: "5",
      nombre: "Sprint 5",
      fechaInicio: "2025-06-01",
      fechaCierre: "2025-06-15",
      tareas: [],
    },
    {
      id: "6",
      nombre: "Sprint 6",
      fechaInicio: "2025-06-16",
      fechaCierre: "2025-06-30",
      tareas: [],
    },
  ];

  return (
    <>
      <Header />
      <div className={layout.layout}>
        <div className={layout.sidebar}>
          <Home />
        </div>

        <div className={layout.content}>
          <div className={styles.header}>
            <h2>Sprints</h2>
            <Button
              variant="success"
              className={`rounded-2 ${styles.addButton}`}
            >
              <div className={styles.addButtonContent}>
                Nuevo Sprint
                <span className="material-symbols-outlined">add</span>
              </div>
            </Button>
          </div>

          <div className={styles.grid}>
            {sprintsSimulados.map((sprint) => (
              <Card key={sprint.id} className={styles.card}>
                <Card.Body>
                  <div className={styles.cardHeader}>
                    <h5>{sprint.nombre}</h5>
                    <span className={styles.fecha}>
                      {sprint.fechaInicio} ➡ {sprint.fechaCierre}
                    </span>
                  </div>
                  <p>Tareas: {sprint.tareas.length}</p>

                  <ButtonGroup className="gap-2 mt-2">
                    <Button variant="warning" size="sm" className="rounded-2">
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </Button>
                    <Button variant="primary" size="sm" className="rounded-2">
                      <span className="material-symbols-outlined">edit</span>
                    </Button>
                    <Button variant="danger" size="sm" className="rounded-2">
                      <span className="material-symbols-outlined">delete</span>
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
