// src/lib/axios.ts
import axios from "axios";
import { useAuthStore } from "../store/auth";

export const api = axios.create({
  // baseURL:"http://localhost:3000",
  baseURL: import.meta.env.VITE_API_URL,
});

// Usa o token direto do Zustand
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
