import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./Pages/Dashboard";
import CalendarPage from "./Pages/CalendarPage";
import KanbanBoard from "./Pages/KanbanBoard";
import Settings from "./Pages/Settings";
import "./App.css";

export default function AdminDashboardApp() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-background text-foreground">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/kanban" element={<KanbanBoard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
