import { create } from "zustand";
import { ISprint } from "../types/ITodo";
import { editarSprint, postNuevoSprint } from "../http/sprintList";

interface ISprintStore {
  sprints: ISprint[];
  currentSprint: ISprint | null;
  setCurrentSprint: (sprint: ISprint | null) => void;
  setSprintArray: (arrayDesprint: ISprint[]) => void;
  agregarUnSprint: (nuevoSprint: ISprint) => void;
  editarUnSprint: (sprintEditado: ISprint) => void;
  eliminarUnSprint: (idSprint: string) => void;
}

export const sprintStore = create<ISprintStore>((set) => ({
  sprints: [],
  currentSprint: null,

  setCurrentSprint: (sprint) => set({ currentSprint: sprint }),
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
      const updateSprint = await editarSprint(sprintEditado);

      set((state) => ({
        sprints: state.sprints.map((s) =>
          s.id === updateSprint.id ? updateSprint : s
        ),
        currentSprint:
          state.currentSprint?.id === updateSprint.id
            ? updateSprint
            : state.currentSprint,
      }));
    } catch (error) {
      console.error("Error al guardar el sprint:", error);
      throw error;
    }
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
