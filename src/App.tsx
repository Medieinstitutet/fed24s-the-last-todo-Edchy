import { useState, useEffect } from "react";
import { todos as initialTodos } from "./data";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";
import { AddTodoDrawer } from "./components/AddTodoDrawer";
import { toast, Toaster } from "sonner";
import { FilterTodos } from "./components/FilterTodos";

export default function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : initialTodos
  );
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(allTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
    setFilteredTodos(allTodos);
  }, [allTodos]);

  const handleDeleteTodo = (id: string) => {
    setAllTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toast("Todo deleted", {
      description: "Some description",
    });
  };
  const handleAddTodo = (newTodo: Todo) => {
    setAllTodos((prevTodos) => [...prevTodos, newTodo]);
    toast("Todo added", {
      description: "Some description",
      action: {
        label: "Undo",
        onClick: () => handleDeleteTodo(newTodo.id),
      },
    });
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleSortTodos = (filter: string) => {
    console.log("Sorting todos by:", filter);

    let result = [...allTodos];

    if (filter === "completed") {
      result = result.filter((t) => !t.completed);
    } else if (filter === "priority") {
      result = result.filter((t) => t.priority === "high");
    } else if (filter === "dueDate") {
      result = result.filter((t) => t.dueDate !== "");
    }

    setFilteredTodos(result);
  };

  return (
    <div className="">
      <Toaster />
      <main className="w-full max-w-3xl mx-auto p-4 flex flex-col">
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
        <FilterTodos onSortTodos={handleSortTodos} />
        <AddTodoDrawer onAddTodo={handleAddTodo} />
      </main>
    </div>
  );
}
