import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', users: 400, revenue: 2400, sessions: 2400 },
  { name: 'Feb', users: 300, revenue: 1398, sessions: 1800 },
  { name: 'Mar', users: 200, revenue: 9800, sessions: 2800 },
  { name: 'Apr', users: 278, revenue: 3908, sessions: 2000 },
  { name: 'May', users: 189, revenue: 4800, sessions: 2181 },
  { name: 'Jun', users: 239, revenue: 3800, sessions: 2500 },
  { name: 'Jul', users: 349, revenue: 4300, sessions: 2100 },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-medium text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold text-gray-800">2,456</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-medium text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold text-gray-800">$24,780</p>
            <p className="text-sm text-green-600 mt-1">↑ 8.5% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-medium text-gray-500">Conversion</h3>
            <p className="text-3xl font-bold text-gray-800">3.2%</p>
            <p className="text-sm text-red-600 mt-1">↓ 0.5% from last month</p>
          </div>
        </div>

        {/* Main Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Monthly Performance</h3>
            <div className="flex space-x-4">
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium">Users</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm font-medium">Revenue</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm font-medium">Sessions</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { id: 1, user: 'John Doe', action: 'created a new project', time: '2 hours ago' },
              { id: 2, user: 'Jane Smith', action: 'updated settings', time: '4 hours ago' },
              { id: 3, user: 'Robert Johnson', action: 'completed onboarding', time: '1 day ago' },
              { id: 4, user: 'Emily Davis', action: 'made a purchase', time: '2 days ago' },
            ].map((item) => (
              <div key={item.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium">
                  {item.user.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{item.user} <span className="text-gray-500 font-normal">{item.action}</span></p>
                  <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}