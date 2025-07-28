// src/hooks/useUnidades.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export interface Unidade {
  id: number;
  name: string;
}

const fetchUnidades = async (): Promise<Unidade[]> => {
  const response = await api.get("/unitys");
  return response.data;
};

export const useUnidades = () => {
  return useQuery({
    queryKey: ["unidades"],
    queryFn: fetchUnidades,
  });
};
