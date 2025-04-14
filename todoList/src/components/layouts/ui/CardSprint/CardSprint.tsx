import { Button, Card } from "react-bootstrap";
import styles from "./CardSprint.module.css";
import { ISprint } from "../../../../types/ITodo";
import { useNavigate } from "react-router";


interface CardSprintProps {
  sprint : ISprint
}


export const CardSprint = ({sprint} : CardSprintProps) => {
  const navigate = useNavigate(); // Hook para navegar

  const handleNavigate = () => {
    navigate(`/sprints/${sprint.id}`, { state: { sprint } }); // Pasar el sprint como estado
  };
  
  return (



    <>
      <div className={styles.cardSprintContainer}>
        <Card
          style={{
            width: "18rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          className="mb-2"
          onClick={handleNavigate}
          
        >
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.cardSprintTitle}>
              {" "}
              {sprint.nombre}{" "}
            </Card.Title>
            <Card.Text className={styles.cardContainer}>
              <p>Fecha de inicio: {sprint.fechaInicio}</p>
              <p>Fecha de cierre: {sprint.fechaCierre}</p>
            </Card.Text>
            <div className={styles.cardButtons}>
              <Button className="d-flex align-items-center" variant="warning">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  visibility
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="primary">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  edit
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="danger">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  delete
                </span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
