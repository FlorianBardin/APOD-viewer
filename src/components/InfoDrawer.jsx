"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";

export default function InfoDrawer({ title, desc }) {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger>
        <Button variant="outline">About this picture</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="left-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={{ "--initial-transform": "calc(100% + 8px)" }}
        >
          <div className="bg-background h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">
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
