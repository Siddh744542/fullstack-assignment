import "./App.css";
import AddTask from "./components/addTask";
import { TaskManager } from "./components/taskManager";

export default function App() {
  console.log(import.meta.env.VITE_SERVER_URL);

  return (
    <div className="max-w-lg mx-auto m-4">
      <h1 className="text-4xl  mb-4 font-semibold text-center text-primary">
        Task Manager
      </h1>
      <AddTask />
      <TaskManager />
    </div>
  );
}
