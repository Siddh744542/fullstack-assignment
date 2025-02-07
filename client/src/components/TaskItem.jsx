import moment from "moment";
import { CalendarClock, Edit, Trash2 } from "lucide-react";

function TaskItem({ title, description, dueDate, status }) {
  const formattedDate = moment(dueDate).format("MMM D, YYYY");

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-300">
      {/* Task Details */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Due Date & Status */}
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

      {/* Action Buttons */}
      <div className="flex items-center gap-1 ml-2">
        <button
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
          aria-label="Edit Task"
        >
          <Edit className="w-5 h-5" />
        </button>
        <button
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
          aria-label="Delete Task"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
