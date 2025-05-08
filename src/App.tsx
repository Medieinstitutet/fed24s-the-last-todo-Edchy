import { useState } from "react";
import { todos as initialTodos } from "./data";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";
import { AddTodoDrawer } from "./components/AddTodoDrawer";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="">
      <main className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-12">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        <AddTodoDrawer />
      </main>
    </div>
  );
}
