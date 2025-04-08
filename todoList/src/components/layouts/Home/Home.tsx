import { CardSpring } from "../ui/CardSprint/CardSprint";
import styles from "./Home.module.css";

export const Home = () => {
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
        <CardSpring />
      </div>
    </div>
  );
};
