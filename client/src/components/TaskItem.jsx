import moment from "moment";
import { CalendarClock, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../reactQuery/mutation/taskMutation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function TaskItem({ title, description, dueDate, status, id }) {
  const formattedDate = moment(dueDate).format("MMM D, YYYY");
  const updateTaskMutation = useUpdateTaskMutation();
  const deleteTaskMutation = useDeleteTaskMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [updatedTask, setUpdatedTask] = useState({
    title,
    description,
    dueDate: dueDate ? moment(dueDate).format("YYYY-MM-DD") : "",
    status,
  });

  const handleUpdate = () => {
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
        <div className="py-1.5 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row flex-1 gap-4">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <label className="text-xs text-gray-500">Title :</label>
              <input
                type="text"
                value={updatedTask.title}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, title: e.target.value })
                }
                className="border p-2 rounded-lg w-full"
              />
              <label className="text-xs text-gray-500">Description :</label>
              <input
                type="text"
                value={updatedTask.description}
                onChange={(e) =>
                  setUpdatedTask({
                    ...updatedTask,
                    description: e.target.value,
                  })
                }
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <label className="text-xs text-gray-500">Due Date :</label>
              <input
                type="date"
                value={updatedTask.dueDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
                }
                className="border p-2 rounded-lg w-full"
              />
              <label className="text-xs text-gray-500">Status :</label>
              <select
                value={updatedTask.status}
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, status: e.target.value })
                }
                className="border p-2 rounded-lg w-full"
              >
                <option value="Completed">Completed</option>
                <option value="In progress">In progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="px-2 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-gray-500">
              <CalendarClock className="w-4 h-4" />
              <p className="text-sm">{formattedDate}</p>
            </div>
            <p
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : status === "In progress"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {status}
            </p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <button
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md"
              onClick={() => setIsDeleteOpen(true)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <DialogPanel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DialogTitle className="text-lg font-semibold">
              Confirm Deletion
            </DialogTitle>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this task?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                onClick={() => setIsDeleteOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}

export default TaskItem;
