import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../../constant/constant";

export function useTaskData(userId, selectedMonth) {
  return useQuery({
    queryKey: ["taskData", userId, selectedMonth],
    queryFn: async () => {
      const response = await axios.get(`${SERVER_URL}/tasks`);
      return response.data;
    },
  });
}
