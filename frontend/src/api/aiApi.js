import axiosClient from "./axiosClient";

export const requestAdvice = (payload) => axiosClient.post("/api/ai/advice", payload);
