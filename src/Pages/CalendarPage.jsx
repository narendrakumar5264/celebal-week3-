import React from "react";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <Calendar />
    </div>
  );
}
