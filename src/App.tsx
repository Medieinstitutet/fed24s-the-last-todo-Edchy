import { useState, useEffect } from "react";
import { todos as initialTodos } from "./data";
import TodoList from "./components/TodoList";
import { Todo } from "./types/Todo";
import { AddTodoDrawer } from "./components/AddTodoDrawer";
import { toast, Toaster } from "sonner";
import { FilterTodos } from "./components/FilterTodos";
import { useSound } from "react-sounds";
import { addHours, parseISO, isAfter, isBefore } from "date-fns";
import NikeLogo from "./components/NikeLogo";

export default function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : initialTodos
  );
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(allTodos);
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const { play: playTrash } = useSound("ui/tab_open", {
    volume: 0.1,
  });
  const { play: playAdd } = useSound("notification/completed", {
    volume: 0.1,
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
    applyFilter(currentFilter);
  }, [allTodos]);

  const applyFilter = (filter: string) => {
    let result = [...allTodos];

    if (filter === "completed") {
      result = result.filter((t) => !t.completed);
    } else if (filter === "priority") {
      result = result.filter((t) => t.priority === "high");
    } else if (filter === "isExpiringSoon") {
      const now = new Date();
      const oneDayFromNow = addHours(now, 24);
      result = result.filter((t) => {
        if (!t.dueDate) return false;
        const dueDate = parseISO(t.dueDate);
        return isAfter(dueDate, now) && isBefore(dueDate, oneDayFromNow);
      });
    }

    setFilteredTodos(result);
  };

  const handleDeleteTodo = (id: string) => {
    setAllTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toast("Todo deleted", {
      description: "Now you can do something else.",
    });
    playTrash();
  };

  const handleAddTodo = (newTodo: Todo) => {
    setAllTodos((prevTodos) => [...prevTodos, newTodo]);
    toast("Todo added", {
      description: "Now you can do it.",
      action: {
        label: "Undo",
        onClick: () => handleDeleteTodo(newTodo.id),
      },
    });
    playAdd();
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleSortTodos = (filter: string) => {
    setCurrentFilter(filter);
    applyFilter(filter);
  };

  return (
    <div className="">
      <Toaster />
      <div className="flex justify-between px-4">
        <NikeLogo color="white" />
        <h1 className="text-l py-4">Just todo it again...</h1>
      </div>
      <main className="w-full max-w-3xl mx-auto p-4 flex flex-col justify-center gap-2">
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />

        <FilterTodos className="self-end" onSortTodos={handleSortTodos} />
        <AddTodoDrawer onAddTodo={handleAddTodo} />
      </main>
    </div>
  );
}
