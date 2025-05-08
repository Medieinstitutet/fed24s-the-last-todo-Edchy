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
  const handleAddTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <div className="">
      <main className="w-full max-w-3xl mx-auto p-4 flex flex-col gap-12">
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
        <AddTodoDrawer onAddTodo={handleAddTodo} />
      </main>
    </div>
  );
}
