import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SERVER_URL } from "../../constant/constant";
import toast from "react-hot-toast";

export function useAddTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      await axios.post(`${SERVER_URL}/tasks`, formData);
    },
    onSuccess: () => {
      toast.success("Task Add successfully!");
      queryClient.invalidateQueries(["taskData"]);
    },
    onError: (error) => {
      error.response
        ? toast.error(error.response.data.error)
        : toast.error("Failed to add Task");
    },
  });
}

export function useUpdateTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      task_name,
      task_description,
      due_date,
      status,
    }) => {
      await axios.put(`${SERVER_URL}/tasks/${id}`, {
        task_name,
        task_description,
        due_date,
        status,
      });
    },
    onSuccess: () => {
      toast.success("Task updated successfully!");
      queryClient.invalidateQueries(["taskData"]);
    },
    onError: () => {
      toast.error("Failed to update task.");
    },
  });
}
export function useDeleteTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${SERVER_URL}/tasks/${id}`);
    },
    onSuccess: () => {
      toast.success("Task deleted successfully!");
      queryClient.invalidateQueries(["taskData"]);
    },
    onError: () => {
      toast.error("Failed to delete task.");
    },
  });
}
