export interface ITarea {
  id?: string;
  titulo: string;
  descripcion: string;
  fechaLimite: string;
  status: "backlog" | "en-progreso" | "completada";
}
