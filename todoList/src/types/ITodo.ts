export interface ITarea {
  id?: string;
  titulo: string;
  descripcion: string;
  fechaLimite: string;
  status: "backlog" | "pendiente" | "en-progreso" | "completada";
}

export interface ISprint {
  id: string;
  nombre: string;
  fechaInicio: string;
  fechaCierre: string;
  tareas: ITarea[];
}
