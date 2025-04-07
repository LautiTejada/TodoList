import { Button } from "react-bootstrap";
import { Header } from "../../layouts/Header/Header";
import { Home } from "../../layouts/Home/Home";
import styles from "./BacklogScreen.module.css";
import { ModalAgregarTarea } from "../../modals/ModalAgregarTarea/ModalAgregarTarea";
import { useState } from "react";
import { CardTarea } from "../../layouts/ui/CardTarea/CardTarea";

export const BacklogScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <div className={styles.backlogContainer}>
        <Home />
        <div>
          <div className={styles.subtitleContainer}>
            <h3>Backlog</h3>
            <div className={styles.tareasHeader}>
              <h4>Tareas en el backlog</h4>
              <Button variant="primary" onClick={handleOpenModal}>
                <div className={styles.addTareaButton}>
                  Agregar Tarea
                  <span className="material-symbols-outlined">add_box</span>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.tareaContainer}>
            <CardTarea />
          </div>
        </div>
      </div>
      <ModalAgregarTarea show={showModal} handleClose={handleCloseModal} />
    </>
  );
};
