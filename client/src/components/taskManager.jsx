import { useTaskData } from "../api/query/taskQuery";
import TaskItem from "./TaskItem";

export const TaskManager = ({ userId, selectedMonth }) => {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useTaskData(userId, selectedMonth);

  if (isLoading) return <p>Loading tasks...</p>;
  if (isError) return <p>Failed to load tasks.</p>;

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-2xl">
      <div>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem
              key={index}
              title={task.task_name}
              description={task.task_description}
              dueDate={task.due_date}
              status={task.status}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};
