import { Button } from "react-bootstrap";
import { CardSpring } from "../ui/CardSprint/CardSprint";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.navBacklog}>
      <div className={styles.buttonSprint}>
        <Button variant="primary" style={{ display: "flex", alignItems: "center", justifyContent:"center", gap: "5px" , width: "10vw", height: "5vh", borderRadius: "10px", border: "1px white solid", fontSize: "16px"}}>  
        Agregar Sprint
        <span className="material-symbols-outlined">add</span>
        </Button>
      </div>  
      <div className={styles.listCardContainer}>
        <div className={styles.titleContainer}>
          <span className="material-symbols-outlined" style={{fontSize:"32px"}}>clear_all</span>  
          <h3>Lista de Sprint</h3>
        </div>
        <CardSpring />
      </div>
    </div>
  );
};
