export interface ITarea {
  id?: string;
  titulo: string;
  descripcion: string;
  fechaLimite: string;
  status: "backlog" | "en-progreso" | "completada";
}

export interface ISprint {
  id: string;
  nombre: string;
  fechaInicio: string;
  fechaCierre: string;
  tareas: ITarea[];
}
