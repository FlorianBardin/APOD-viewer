"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function BottomCalendar({ date, setDate }) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      disabled={(date) =>
        date > new Date() ||
        date < new Date("Fri Jun 16 1995 00:00:00 GMT+0200")
      }
    />
  );
}
