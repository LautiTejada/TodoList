import axios from "axios";
import { ISprint } from "../types/ITodo";


const API_URL = "http://localhost:3000/sprintList";

export const getAllSprints = async () => {
    try {
        const response = await axios.get<{ sprints: ISprint[] }>(API_URL);
        return response.data.sprints;
    } catch (error) {
        console.log(error);
    }
};

export const postNuevoSprint = async (nuevoSprint: ISprint) => {
    try {
        const response = await axios.get<{ sprints: ISprint[] }>(API_URL);
        const sprints = response.data.sprints;

        const updatedSprints = [...sprints, nuevoSprint];

        await axios.put(API_URL, { sprints: updatedSprints });
        return nuevoSprint;
    } catch (error) {
        console.log("Error al crear un sprint", error);
    }
};

export const editarSprint = async (sprintEditado: ISprint) => {
    try {
        const response = await axios.get<{ sprints: ISprint[] }>(API_URL);
        const sprints = response.data.sprints;

        const updatedSprints = sprints.findIndex((s: ISprint) => s.id === sprintEditado.id);

        if (updatedSprints === -1) {
        throw new Error(`Sprint con id ${sprintEditado.id} no encontrado`);
}

        await axios.put(API_URL, { sprints: updatedSprints });
        return sprintEditado;

    } catch (error) {
        console.log("Error al editar el sprint", error);
        throw error;
    }
};

export const eliminarSprintById = async (idSprint: string) => {
    try {
        const response = await axios.get<{ sprints: ISprint[] }>(API_URL);
        const sprints = response.data.sprints;

        const updatedSprints = sprints.filter(s => s.id !== idSprint);

        await axios.put(API_URL, { sprints: updatedSprints });
        return idSprint;
    } catch (error) {
        console.log(error);
    }
};
