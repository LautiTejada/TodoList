import { create } from "zustand";
import { ITarea } from "../types/ITodo";

interface ITaskStore {
  tareas: ITarea[];
  setArrayTareas: (arrayDeTareas: ITarea[]) => void;
  agregarUnaTarea: (nuevaTarea: ITarea) => void;
  editarUnaTarea: (tareaEditada: ITarea) => void;
  eliminarUnaTarea: (idTarea: string) => void;
}

export const taskStore = create<ITaskStore>((set) => ({
  tareas: [],

  //Agregar array de tareas

  setArrayTareas: (arrayDeTareas) => set(() => ({ tareas: arrayDeTareas })),

  //Agregar una tarea

  agregarUnaTarea: (nuevaTarea) =>
    set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),

  //Editar una tarea

  editarUnaTarea: (tareaEditada) =>
    set((state) => {
      const tareaArreglada = state.tareas.map((tarea) =>
        tarea.id === tareaEditada.id ? { ...tarea, ...tareaEditada } : tarea
      );
      return { tareas: tareaArreglada };
    }),

  //eliminar una tarea
  eliminarUnaTarea: (idTarea) =>
    set((state) => {
      const arregloTareas = state.tareas.filter(
        (tarea) => tarea.id !== idTarea
      );
      return { tareas: arregloTareas };
    }),
}));
