import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updated) =>
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));

  const deleteTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTasks;
