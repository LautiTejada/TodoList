import { useParams } from "react-router";
import { sprintStore } from "../../../store/sprintStore";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import styles from "./SprintScreen.module.css";
import { CardTarea } from "../../layouts/ui/CardTarea/CardTarea";

export const SprintScreen = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el ID del sprint desde la URL
  const sprint = sprintStore((state) =>
    state.sprints.find((sprint) => sprint.id === id)
  );

  if (!sprint) {
    return <p>Cargando sprint...</p>; // Manejar el caso en que el sprint no exista
  }

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
            <div className={styles.tareasContainer}>
              <div className={styles.apartado}>
                <h4 className={styles.apartadoTitulo}>Pendientes</h4>
                <div className={styles.tareas}>
                  {tareasPendientes.map((tarea) => (
                    <CardTarea
                      key={tarea.id}
                      tarea={tarea}
                      sprintId={sprint.id}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.apartado}>
                <h4 className={styles.apartadoTitulo}>En Progreso</h4>
                <div className={styles.tareas}>
                  {tareasEnProgreso.map((tarea) => (
                    <CardTarea
                      key={tarea.id}
                      tarea={tarea}
                      sprintId={sprint.id}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.apartado}>
                <h4 className={styles.apartadoTitulo}>Completadas</h4>
                <div className={styles.tareas}>
                  {tareasCompletadas.map((tarea) => (
                    <CardTarea
                      key={tarea.id}
                      tarea={tarea}
                      sprintId={sprint.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
