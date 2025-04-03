import { CardSpring } from "../ui/CardSpring/CardSpring";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.navBacklog}>
      <div className={styles.listCardContainer}>
        <div className={styles.titleContainer}>
          <h3>Lista de Sprint</h3>
          <span className="material-symbols-outlined">list</span>
        </div>
        <CardSpring />
      </div>
    </div>
  );
};
