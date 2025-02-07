import { useState } from "react";
import { useAddTaskMutation } from "../reactQuery/mutation/taskMutation.js";

function AddTask() {
  const [isClicked, setIsClicked] = useState(false);

  const addTaskMutation = useAddTaskMutation();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(false);
    console.log("Task Added:", task);
    addTaskMutation.mutate({
      task_name: task.title,
      task_description: task.description,
      due_date: task.dueDate,
      status: task.status,
    });
    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    });
  };

  return (
    <div className="my-4 p-4 bg-white shadow-md rounded-2xl">
      <div>
        <div className="flex gap-2">
          <input
            type="text"
            name="title"
            placeholder={`${isClicked ? "Title" : "Add a task"}`}
            onClick={() => setIsClicked(true)}
            onChange={handleChange}
            value={task.title}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-action-500 placeholder-gray-400 transition-colors min-w-0"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-action-500 text-white rounded-lg hover:bg-action-600 focus:outline-none focus:ring-2 focus:ring-action-500 focus:ring-opacity-50 transition-colors"
          >
            Add
          </button>
        </div>

        {isClicked && (
          <div className="flex flex-col gap-3 mt-3">
            <textarea
              name="description"
              onChange={handleChange}
              value={task.description}
              placeholder="Description"
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-action-500 placeholder-gray-400 resize-y transition-colors"
            />
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <label htmlFor="dueDate" className="text-gray-500 text-sm">
                  Due Date:
                </label>
                <input
                  type="date"
                  name="dueDate"
                  onChange={handleChange}
                  value={task.dueDate}
                  min={new Date().toISOString().split("T")[0]}
                  className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-action-500 text-gray-700 transition-colors min-w-0"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <label htmlFor="status" className="text-gray-500 text-sm">
                  Status:
                </label>
                <select
                  name="status"
                  value={task.status}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 text-gray-700 text-sm focus:ring-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="In progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTask;
