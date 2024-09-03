"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import { title } from "@/components/primitives";

export default function CalendarPage() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
        </div>

    );
}
