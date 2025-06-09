import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    setIsAdding(true);
    const newTask = { id: Date.now(), text: task.trim(), completed: false };
    setTimeout(() => {
      setTasks([...tasks, newTask]);
      setTask("");
      setIsAdding(false);
    }, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "asc") return a.text.localeCompare(b.text);
    if (sortOrder === "desc") return b.text.localeCompare(a.text);
    return 0;
  });

  const activeTasksCount = tasks.filter(t => !t.completed).length;
  const completedTasksCount = tasks.filter(t => t.completed).length;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        ✨ To-Do List
      </h1>

      {/* Stats */}
      <div className="flex justify-between mb-6 text-sm text-gray-600">
        <span>Total: {tasks.length}</span>
        <span>Active: {activeTasksCount}</span>
        <span>Completed: {completedTasksCount}</span>
      </div>
      </div>

      {/* Add Task */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-grow border-2 border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-400 transition-all"
          placeholder="What needs to be done?"
        />
        <button
          onClick={handleAddTask}
          disabled={isAdding}
          className={`bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all ${
            isAdding ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isAdding ? "Adding..." : "Add"}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === "all" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === "active" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === "completed" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            Completed
          </button>
        </div>
        
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSortOrder("asc")}
            className={`px-3 py-1 rounded-md text-sm ${
              sortOrder === "asc" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            A-Z
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-3 py-1 rounded-md text-sm ${
              sortOrder === "desc" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            Z-A
          </button>
          <button
            onClick={() => setSortOrder("none")}
            className={`px-3 py-1 rounded-md text-sm ${
              sortOrder === "none" ? "bg-white shadow-sm" : "hover:bg-gray-50"
            }`}
          >
            None
          </button>
        </div>
      </div>

      {/* Task List */}
      <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {sortedTasks.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-4 border-2 rounded-xl transition-all ${
              t.completed
                ? "bg-green-50 border-green-200"
                : "bg-white border-gray-200 hover:border-indigo-200"
            }`}
          >
            <div className="flex items-center space-x-3 flex-grow">
              <button
                onClick={() => handleToggle(t.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  t.completed
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-300 hover:border-indigo-400"
                }`}
              >
                {t.completed && "✓"}
              </button>
              <span
                className={`${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
            </div>
            <button
              onClick={() => handleDelete(t.id)}
              className="text-gray-400 hover:text-red-500 ml-4 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </li>
        ))}
        {sortedTasks.length === 0 && (
          <li className="text-center py-8 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            No tasks found. Add one above!
          </li>
        )}
      </ul>
    </div>
  );
}