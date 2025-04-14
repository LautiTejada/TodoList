import { useShallow } from "zustand/shallow";
import { sprintStore } from "../store/sprintStore";
import {
  editarSprint,
  eliminarSprintById,
  getAllSprints,
  postNuevoSprint,
} from "../http/sprintList";
import { ISprint } from "../types/ITodo";

export const useSprint = () => {
  const {
    sprints,
    setSprintArray,
    agregarUnSprint,
    eliminarUnSprint,
    editarUnSprint,
  } = sprintStore(
    useShallow((state) => ({
      sprints: state.sprints,
      setSprintArray: state.setSprintArray,
      agregarUnSprint: state.agregarUnSprint,
      eliminarUnSprint: state.eliminarUnSprint,
      editarUnSprint: state.editarUnSprint,
    }))
  );

  const getSprints = async () => {
    const data = await getAllSprints();
    if (data) setSprintArray(data);
  };

  const crearSprint = async (nuevoSprint: ISprint) => {
    agregarUnSprint(nuevoSprint);
    try {
      await postNuevoSprint(nuevoSprint);
    } catch (error) {
      console.log("Algo salio mal");
    }
  };

  const putSprintEditar = async (sprintEditado: ISprint) => {
    const estadoPrevio = sprints.find((el) => el.id === sprintEditado.id);
    editarUnSprint(sprintEditado);
    try {
      await editarSprint(sprintEditado);
    } catch (error) {
      console.log("Error al editar el sprint en JSON Server", error);
      if (estadoPrevio) editarUnSprint(estadoPrevio);
    }
  };

  const eliminarSprint = async (idSprint: string) => {
    const estadoPrevio = sprints.find((el) => el.id === idSprint);
    eliminarUnSprint(idSprint);
    try {
      await eliminarSprintById(idSprint);
    } catch (error) {
      if (estadoPrevio) agregarUnSprint(estadoPrevio);
    }
  };

  return {
    getSprints,
    crearSprint,
    putSprintEditar,
    eliminarSprint,
    sprints,
  };
};
