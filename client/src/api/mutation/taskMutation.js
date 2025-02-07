import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SERVER_URL } from "../../constant/constant";
export function useAddTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      console.log("control was here");

      await axios.post(`${SERVER_URL}/tasks`, formData);
    },
    onSuccess: () => {
      toast.success("Task Add successfully!");
      queryClient.invalidateQueries(["taskData"]);
    },
    onError: () => {
      toast.error("Failed to add task.");
    },
  });
}
