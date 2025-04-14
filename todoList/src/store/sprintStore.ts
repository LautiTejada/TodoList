import { create } from "zustand";
import { ISprint } from "../types/ITodo";
import { postNuevoSprint } from "../http/sprintList";

interface ISprintStore {
  sprints: ISprint[];
  setSprintArray: (arrayDesprint: ISprint[]) => void;
  agregarUnSprint: (nuevoSprint: ISprint) => void;
  editarUnSprint: (sprintEditado: ISprint) => void;
  eliminarUnSprint: (idSprint: string) => void;
}

export const sprintStore = create<ISprintStore>((set) => ({
  sprints: [],

  // Agregar array de sprints

  setSprintArray: (arrayDesprint) => set(() => ({ sprints: arrayDesprint })),

  // Agregar un sprint

  agregarUnSprint: async (nuevoSprint) => {
    await postNuevoSprint(nuevoSprint);
    set((state) => ({
      sprints: [...state.sprints, nuevoSprint],
    }));
  },

  //Editar un sprint

  editarUnSprint: async (sprintEditado) => {
    try {
      const respuesta = await fetch(
        `http://localhost:3000/sprints/${sprintEditado.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sprintEditado),
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo editar el sprint en el servidor");
      }

      const sprintActualizado = await respuesta.json();

      set((state) => {
        const sprintsActualizadas = state.sprints.map((sprint) =>
          sprint.id === sprintEditado.id ? sprintActualizado : sprint
        );
        return { sprints: sprintsActualizadas };
      });
    } catch (error) {}
  },

  //Eliminar un sprint

  eliminarUnSprint: (idSprint) =>
    set((state) => {
      const arregloSprint = state.sprints.filter(
        (sprint) => sprint.id !== idSprint
      );
      return { sprints: arregloSprint };
    }),
}));
