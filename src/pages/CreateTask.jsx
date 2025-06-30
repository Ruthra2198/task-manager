import TaskForm from "../components/TaskForm";
import useTasks from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CreateTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleCreate = (task) => {
    addTask({ ...task, id: uuid() });
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>
      <TaskForm onSubmit={handleCreate} submitLabel="Add Task" />
    </div>
  );
};

export default CreateTask;
