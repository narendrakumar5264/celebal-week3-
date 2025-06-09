import React from "react";

export default function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Toggle Theme</button>
    </header>
  );
}