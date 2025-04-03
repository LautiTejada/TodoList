import { Button } from "react-bootstrap";
import { CardTarea } from "../../CardTarea/CardTarea";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import styles from "./BacklogScreen.module.css";

export const BacklogScreen = () => {
  return (
    <>
      <Header />
      <div className={styles.backlogContainer}>
        <Home />
        <div>
          <div className={styles.subtitleContainer}>
            <h3>Backlog</h3>
            <div className={styles.tareasHeader}>
              <h4>Tareas en el backlog</h4>
              <Button variant="primary">
                <div className={styles.addTareaButton}>
                  Agregar Tarea
                  <span className="material-symbols-outlined">add_box</span>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.tareaContainer}>
            <CardTarea />
          </div>
        </div>
      </div>
    </>
  );
};
