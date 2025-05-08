import AddTodoForm from "./AddTodoForm";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export const AddTodoDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-emerald-400 text-white" variant="outline">
          <CirclePlus />
          New Todo
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-12 overflow-visible">
        <DrawerHeader>
          <DrawerTitle>Add a new todo</DrawerTitle>
          <DrawerDescription>
            You can drag and drop the todos to reorder them.
          </DrawerDescription>
        </DrawerHeader>
        <AddTodoForm onComplete={() => setOpen(false)} />
        {/* <DrawerFooter>
          <DrawerClose asChild>
            <Button className="" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};
