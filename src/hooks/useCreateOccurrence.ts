import { useMutation } from "@tanstack/react-query";
import { api } from "../api/axios";
import { useAuthStore } from "../store/auth";

interface CreateOccurrenceInput {
  date: string; // formato YYYY-MM-DD
  time: string; // ISO 8601
  attendedArea?: string;
  location: string;
  city?: string;
  report: string;
  classification: "Positiva" | "Negativa";
  severity: "Grave" | "Moderada" | "Leve";
  status?: string;
  eventCost?: number;
  currency?: string;
  totalCost?: number;
  type?: "AVU" | "BRO"; // corrigido
}

export function useCreateOccurrence(onSuccessCallback?: () => void) {
  const accessToken = useAuthStore((state) => state.token); // ✅ nome correto

  return useMutation({
    mutationFn: async (data: CreateOccurrenceInput) => {
      const response = await api.post("/occurrences", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Erro ao registrar ocorrência.";
      alert(message);
    },
  });
}
