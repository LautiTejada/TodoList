import { useLocation } from "react-router";
import { ISprint } from "../../../types/ITodo";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import { Button } from "react-bootstrap";

import styles from "./SprintScreen.module.css";
import { CardTarea } from "../../layouts/ui/CardTarea/CardTarea";

export const SprintScreen = () => {
  const location = useLocation();
  const sprint = location.state?.sprint as ISprint;

  const tareasPendientes = sprint.tareas.filter(
    (tarea) => tarea.status === "pendiente"
  );
  const tareasEnProgreso = sprint.tareas.filter(
    (tarea) => tarea.status === "en-progreso"
  );
  const tareasCompletadas = sprint.tareas.filter(
    (tarea) => tarea.status === "completada"
  );

  return (
    <>
      <div>
        <Header />
        <div className={styles.mainSprintScreen}>
          <Home />
          <div className={styles.SprintScreenContainer}>
            <div>
              <h3>{sprint.nombre}</h3>
            </div>
            <div className={styles.tareasSprintHeader}>
              <h4>Tareas en el sprint:</h4>
            </div>
            <div>
              <h5>Pendientes</h5>
              {tareasPendientes.map((tarea) => (
                <CardTarea key={tarea.id} tarea={tarea} sprintId={sprint.id} />
              ))}
            </div>
            <div>
              <h5>En Progreso</h5>
              {tareasEnProgreso.map((tarea) => (
                <CardTarea key={tarea.id} tarea={tarea} sprintId={sprint.id} />
              ))}
            </div>
            <div>
              <h5>Completadas</h5>
              {tareasCompletadas.map((tarea) => (
                <CardTarea key={tarea.id} tarea={tarea} sprintId={sprint.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
