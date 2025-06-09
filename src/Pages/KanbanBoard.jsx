import React, { useState } from "react";

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, status: "todo", title: "Initial Setup" },
    { id: 2, status: "in-progress", title: "Create Components" },
    { id: 3, status: "done", title: "Deploy App" },
  ]);

  const renderTasks = (status) => (
    tasks.filter(task => task.status === status).map(task => (
      <div key={task.id} className="p-2 bg-white shadow mb-2 rounded">
        {task.title}
      </div>
    ))
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <h3 className="font-bold mb-2">To Do</h3>
        {renderTasks("todo")}
      </div>
      <div>
        <h3 className="font-bold mb-2">In Progress</h3>
        {renderTasks("in-progress")}
      </div>
      <div>
        <h3 className="font-bold mb-2">Done</h3>
        {renderTasks("done")}
      </div>
    </div>
  );
}
