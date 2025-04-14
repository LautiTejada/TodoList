import { useEffect } from "react";
import { useSprint } from "../../../hooks/useSprint";
import { ISprint } from "../../../types/ITodo";
import { CardSprint } from "../ui/CardSprint/CardSprint";
import styles from "./Home.module.css";

export const Home = () => {

  const { sprints, getSprints } = useSprint();

  useEffect(() => {
    getSprints(); 
  }, [getSprints]);

  return (
    <div className={styles.navBacklog}>
      <div className={styles.listCardContainer}>
        <div className={styles.titleContainer}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "32px" }}
          >
            clear_all
          </span>
          <h3>Lista de Sprint</h3>
          
        </div>
        <div className={styles.cardContainer}>
            {sprints.map((sprint : ISprint) => (
              <CardSprint key={sprint.id} sprint={sprint}/>
            ))}
        </div>  
      </div>
    </div>
  );
};
