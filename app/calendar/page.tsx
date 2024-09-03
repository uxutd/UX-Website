"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        className="rounded-md border shadow"
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </div>
  );
}
