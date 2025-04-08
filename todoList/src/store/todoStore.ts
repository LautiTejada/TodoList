import { create } from "zustand";
import { ITarea } from "../types/ITodo";
import { postNuevaTarea } from "../http/todoList";

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

  agregarUnaTarea: async (nuevaTarea) => {
    await postNuevaTarea(nuevaTarea); // ✅ guardar en db.json
    set((state) => ({
      tareas: [...state.tareas, nuevaTarea], // ✅ reflejar en UI
    }));
  },

  //Editar una tarea

  editarUnaTarea: async (tareaEditada) => {
    try {
      const respuesta = await fetch(`http://localhost:3000/tareas/${tareaEditada.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tareaEditada),
      });
  
      if (!respuesta.ok) {
        throw new Error("No se pudo editar la tarea en el servidor");
      }
  
      const tareaActualizada = await respuesta.json();
  
      set((state) => {
        const tareasActualizadas = state.tareas.map((tarea) =>
          tarea.id === tareaEditada.id ? tareaActualizada : tarea
        );
        return { tareas: tareasActualizadas };
      });
    } catch (error) {
      console.error("Error al editar la tarea:", error);
      throw error; // Para que lo pueda capturar tu componente si querés mostrar un error
    }
  },
  

  // editarUnaTarea: async (tareaEditada) =>
  //   set((state) => {
  //     const tareaArreglada = state.tareas.map((tarea) =>
  //       tarea.id === tareaEditada.id ? { ...tarea, ...tareaEditada } : tarea
  //     );
  //     return { tareas: tareaArreglada };
  //   }),

  //eliminar una tarea
  eliminarUnaTarea: (idTarea) =>
    set((state) => {
      const arregloTareas = state.tareas.filter(
        (tarea) => tarea.id !== idTarea
      );
      return { tareas: arregloTareas };
    }),
}));
