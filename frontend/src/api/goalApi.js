import axiosClient from "./axiosClient";

export const getGoals = () => axiosClient.get("/api/goals");
export const addGoal = (payload) => axiosClient.post("/api/goals", payload);
export const updateGoal = (id, payload) => axiosClient.put(`/api/goals/${id}`, payload);
export const deleteGoal = (id) => axiosClient.delete(`/api/goals/${id}`);
