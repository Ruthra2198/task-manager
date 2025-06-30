import { useParams, useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);
  if (!task) return <p className="p-6">Task not found</p>;

  const handleUpdate = (updated) => {
    updateTask(updated);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <TaskForm initialData={task} onSubmit={handleUpdate} submitLabel="Update Task" />
    </div>
  );
};

export default EditTask;
