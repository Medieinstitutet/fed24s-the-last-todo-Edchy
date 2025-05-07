import { Swapy, utils, SlotItemMap, createSwapy } from "swapy";
import { useEffect, useMemo, useRef, useState } from "react";
import TodoItem from "./TodoItem";

import { Todo } from "@/types/Todo";

type Props = {
  todos: Todo[];
};
//
const TodoList = ({ todos }: Props) => {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy();
    };
  }, []);
  return (
    <section>
      <ul ref={container}>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
