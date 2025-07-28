import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import type {
  Classification,
  Currency,
  OccurrenceType,
  Severity,
  Status,
} from "../types/types";

export type UpdateOccurrenceDto = {
  date: string;
  time: string;
  attendedArea?: string;
  location: string;
  projectSite?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  report: string;
  classification: Classification;
  severity: Severity;
  status?: Status;
  occurrenceFamily?: string;
  eventCost?: number;
  currency?: Currency;
  totalCost?: number;
  type?: OccurrenceType;
};

export function useUpdateOccurrence() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: UpdateOccurrenceDto;
    }) => {
      const response = await api.patch(`/occurrences/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["occurrences"] });
      // opcional: toast de sucesso
    },
    onError: (error) => {
      console.error("Erro ao editar ocorrência:", error);
      // opcional: toast de erro
    },
  });
}
