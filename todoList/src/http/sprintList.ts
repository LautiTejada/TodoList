import axios from "axios";
import { ISprint } from "../types/ITodo";


const API_URL = "http://localhost:3000/sprints"

export const getAllSprints = async () => {
    try {
        const response = await axios.get<ISprint[]>(API_URL)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const postNuevoSprint = async (nuevoSprint: ISprint) => {
    try {
        const response = await axios.post<ISprint>(API_URL, nuevoSprint)
        return response.data
    } catch (error) {
        console.log("Error al crear un sprint",error);
    }
}

export const editarSprint = async (sprintEditado: ISprint) => {
    try {
        const response = await axios.put(`${API_URL}/${sprintEditado.id}`, sprintEditado)
        return response.data
    } catch (error) {
        console.log("Error al editar el sprint", error);
        throw error
    }
}

export const eliminarSprintById = async (idSprint: string) => {
    try {
        const response = await axios.delete<ISprint>(`${API_URL}/${idSprint}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}