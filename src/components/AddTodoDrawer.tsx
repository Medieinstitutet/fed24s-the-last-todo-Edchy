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
import { BorderTrail } from "@/components/ui/border-trail";

type Props = {
  onAddTodo: (todo: Todo) => void;
};

export const AddTodoDrawer = ({ onAddTodo }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="cursor-pointer bg-emerald-400 animate-pulse relative text-white py-8"
          variant="outline"
        >
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 30px rgb(25 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
            }}
            size={100}
          />
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
      </DrawerContent>
    </Drawer>
  );
};
