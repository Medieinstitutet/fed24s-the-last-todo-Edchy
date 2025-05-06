//
import { useState } from "react";
import { todos as initialTodos } from "../data";
import TodoItem from "./TodoItem";
//
const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
