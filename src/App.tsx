import { useState } from "react";
import { todos as initialTodos } from "./data";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <div className="">
      <main className=" grid grid-cols-2 h-screen gap-4 p-4">
        <section className="bg-black rounded-xl">add todos</section>
        <TodoList todos={todos} />
      </main>
    </div>
  );
}
