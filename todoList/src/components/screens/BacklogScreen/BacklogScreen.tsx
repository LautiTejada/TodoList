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
            <h4>Tareas en el backlog</h4>
            <button> Agregar Tarea</button>
          </div>
          <div className={styles.tareaContainer}>
            <CardTarea />
          </div>
        </div>
      </div>
    </>
  );
};
