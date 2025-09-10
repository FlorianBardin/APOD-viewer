import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BottomCalendar } from "./BottomCalendar";

export function PopoverCal({ date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Calendar</Button>
      </PopoverTrigger>
      <PopoverContent>
        <BottomCalendar date={date} setDate={setDate} />
      </PopoverContent>
    </Popover>
  );
}
