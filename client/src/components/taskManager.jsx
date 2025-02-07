import { useTaskData } from "../reactQuery/query/taskQuery";
import TaskItem from "./TaskItem";
import { Loader } from "./loader.jsx";
export const TaskManager = () => {
  const { data: tasks, isLoading, isError } = useTaskData();

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load tasks.</p>;

  return (
    <div className="h-[calc(100vh-180px)] px-6 py-2 mx-auto overflow-y-auto bg-white shadow-md rounded-2xl">
      <div>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.task_name}
              description={task.task_description}
              dueDate={task.due_date}
              status={task.status}
              id={task.id}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};
