import AddTodoForm from "./AddTodoForm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Todo } from "@/types/Todo";

type Props = {
  onAddTodo: (todo: Todo) => void;
};

export const AddTodoDrawer = ({ onAddTodo }: Props) => {
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
        <AddTodoForm onComplete={() => setOpen(false)} onAddTodo={onAddTodo} />
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
