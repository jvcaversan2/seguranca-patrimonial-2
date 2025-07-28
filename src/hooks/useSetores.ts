import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export interface Setor {
  id: number;
  name: string;
}

const fetchSetores = async (): Promise<Setor[]> => {
  const response = await api.get("/sectors");
  return response.data;
};

export const useSetores = () => {
  return useQuery({
    queryKey: ["setores"],
    queryFn: fetchSetores,
  });
};
