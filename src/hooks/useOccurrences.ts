import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import { useAuthStore } from "../store/auth";

interface Occurrence {
  id: number | string;
  location: string;
  date: string;
  status?: string;
  report: string;
}

export function useOccurrences() {
  const accessToken = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);

  return useQuery<Occurrence[]>({
    queryKey: ["occurrences"],
    queryFn: async () => {
      const res = await api.get("/occurrences", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    },
    enabled: !!accessToken && !!user,
  });
}
