import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/calendar" className="hover:text-yellow-300">Calendar</Link>
        <Link to="/kanban" className="hover:text-yellow-300">Kanban</Link>
        <Link to="/settings" className="hover:text-yellow-300">Settings</Link>
      </nav>
    </aside>
  );
}