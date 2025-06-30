import useTasks from "../hooks/useTasks";
import TaskTable from "../components/TaskTable";
import { Link } from "react-router-dom";

const Home = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded">
          Create Task
        </Link>
      </div>
      <TaskTable tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Home;
