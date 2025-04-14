import { useLocation } from "react-router";
import { ISprint } from "../../../types/ITodo";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import { Button } from "react-bootstrap";

import styles from "./SprintScreen.module.css";


export const SprintScreen = () => {
  const location = useLocation();
  const sprint = location.state?.sprint as ISprint; 

  return (
    <>
      <div>
        <Header/>
        <div className={styles.mainSprintScreen}>
          <Home/>
          <div className={styles.SprintScreenContainer}>
            <div>
              <h3>{sprint.nombre}</h3>
            </div>
            <div className={styles.tareasSprintHeader} >
              <h4>Tareas en el sprint:</h4>
              <Button variant="primary">
                <div className={styles.addTareaButton}>
                  Agregar Tarea
                  <span className="material-symbols-outlined">add</span>
                </div>
              </Button>
            </div>


          </div>
        </div>
        
      </div>
      
    </>
  );
};
