import { useState, useEffect } from "react";


const TaskForm = ({ onSubmit, initialData = {}, submitLabel }) => {
    const [title, setTitle] = useState(initialData.title || "");
    const [desc, setDesc] = useState(initialData.desc || "");
    const [error, setError] = useState("");
    const [status, setStatus] = useState(initialData.status || "pending");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return setError("Title is required");
        onSubmit({ ...initialData, title, desc, status });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                className="border p-2 w-full"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="border p-2 w-full"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <select
                className="border p-2 w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {submitLabel}
            </button>
        </form>
    );
};

export default TaskForm;
