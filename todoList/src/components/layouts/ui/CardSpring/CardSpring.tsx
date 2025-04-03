import { Button, Card } from "react-bootstrap";
import styles from "./CardSpring.module.css";
export const CardSpring = () => {
  return (
    <>
      <div className={styles.cardSprintContainer}>
        
          <Card
            style={{ width: "18rem", cursor:"pointer"}}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title className={styles.cardSprintTitle}> Sprint 1 </Card.Title>
              <Card.Text className={styles.cardContainer}>
                <p>Fecha de inicio: </p>
                <p>Fecha de cierre: </p>
              </Card.Text>
              <div className={styles.cardButtons}>
                <Button
                  className="d-flex align-items-center"
                  variant="warning"
                  >
                  <span
                      className="material-symbols-outlined"
                      style={{ color: "black" }}
                    >
                    visibility
                  </span>
                </Button>
                <Button
                  className="d-flex align-items-center"
                  variant="primary"
                  
                  >
                    <span
                        className="material-symbols-outlined"
                        style={{ color: "black" }}
                      >
                      edit
                    </span>
                </Button>
                <Button
                  className="d-flex align-items-center"
                  variant="danger"
                  
                  >
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
