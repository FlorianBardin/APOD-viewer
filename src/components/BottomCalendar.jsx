"use client";

import * as React from "react";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export function BottomCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      disabled={(date) => date > new Date()}
    />
  );
}
