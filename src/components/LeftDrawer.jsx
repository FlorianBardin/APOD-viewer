"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import rightArrow from "../assets/rightArrow.svg";

export default function LeftDrawer({ title, desc }) {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger>
        <Button variant="leftOutline" size="border">
          <img src={rightArrow} alt="Right arrow" className="w-4.5" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="left-2 top-2 bottom-2 fixed z-10 outline-none w-[85vw] md:w-[50vw] lg:w-[30vw] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={{ "--initial-transform": "calc(100% + 8px)" }}
        >
          <div className="border bg-background h-full w-full grow p-5 flex flex-col items-start rounded-[16px]">
            <div className="max-w-md">
              <Drawer.Title className="text-accent-foreground font-medium mb-2">
                {title}
              </Drawer.Title>
              <Drawer.Description className="text-zinc-400 mb-2">
                {desc}
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
