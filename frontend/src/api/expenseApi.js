import axiosClient from "./axiosClient";

export const getExpenses = (params) => axiosClient.get("/api/expenses", { params });
export const addExpense = (data) => axiosClient.post("/api/expenses", data);
export const updateExpense = (id, data) => axiosClient.put(`/api/expenses/${id}`, data);
export const deleteExpense = (id) => axiosClient.delete(`/api/expenses/${id}`);
