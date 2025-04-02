import { Button, Card } from 'react-bootstrap';
import styles from './CardSpring.module.css'

export const CardSpring = () => {
    return (
        <Card
            className={styles.cardSpring}
            style={{ cursor: "pointer", backgroundColor:"#cccc"}}
            >
            <Card.Title className={styles.titleCardSpring}>Spring 1</Card.Title>
            
            <Card.Body className={styles.bodyCard}>

                <div className={styles.containaerCardSpring}>
                    <p>Inicio: </p>
                    <p>Cierre: </p>
                </div>
            
                <div className={styles.buttonsCardSpring}>
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
    )
}
