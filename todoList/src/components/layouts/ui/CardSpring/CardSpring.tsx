import { Card } from "react-bootstrap";
import styles from "./CardSpring.module.css";
export const CardSpring = () => {
  return (
    <>
      <div className={styles.cardSprintContainer}>
        {["Light"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
