import { useState } from "react";
import moment from "moment";
import {
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../reactQuery/mutation/taskMutation";
import TaskForm from "./TaskUpdateForm";
import TaskDisplay from "./TaskDisplay";
import DeleteModal from "./DeleteModel";

function TaskItem({ title, description, dueDate, status, id }) {
  const formattedDate = moment(dueDate).format("MMM D, YYYY");
  const updateTaskMutation = useUpdateTaskMutation();
  const deleteTaskMutation = useDeleteTaskMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleUpdate = (updatedTask) => {
    updateTaskMutation.mutate({
      id,
      task_name: updatedTask.title,
      task_description: updatedTask.description,
      due_date: updatedTask.dueDate,
      status: updatedTask.status,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTaskMutation.mutate(id);
    setIsDeleteOpen(false);
  };

  return (
    <div className="py-2 border-b border-gray-300">
      {isEditing ? (
        <TaskForm
          title={title}
          description={description}
          dueDate={dueDate}
          status={status}
          onCancel={() => setIsEditing(false)}
          onUpdate={handleUpdate}
        />
      ) : (
        <TaskDisplay
          title={title}
          description={description}
          formattedDate={formattedDate}
          status={status}
          onEdit={() => setIsEditing(true)}
          onDelete={() => setIsDeleteOpen(true)}
        />
      )}

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TaskItem;
