import { useState } from "react";
import { todos as initialTodos } from "./data";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";
import AddTodoForm from "./components/AddTodoForm";
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

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="">
      <main className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-12">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="bg-emerald-400 text-white" variant="outline">
              <CirclePlus />
              New Todo
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Add a new todo</DrawerTitle>
              <DrawerDescription>
                You can drag and drop the todos to reorder them.
              </DrawerDescription>
            </DrawerHeader>
            <AddTodoForm />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </main>
    </div>
  );
}
