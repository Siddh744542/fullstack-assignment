import { useState } from "react";
import moment from "moment";

export default function TaskForm({
  title,
  description,
  dueDate,
  status,
  onCancel,
  onUpdate,
}) {
  const [updatedTask, setUpdatedTask] = useState({
    title,
    description,
    dueDate: dueDate ? moment(dueDate).format("YYYY-MM-DD") : "",
    status,
  });

  return (
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
              setUpdatedTask({ ...updatedTask, description: e.target.value })
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
          className="px-2 py-1 bg-gray-400 text-white rounded-lg"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-2 py-1 bg-green-500 text-white rounded-lg"
          onClick={() => onUpdate(updatedTask)}
        >
          Update
        </button>
      </div>
    </div>
  );
}
