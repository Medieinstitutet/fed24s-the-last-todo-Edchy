import { useEffect, useMemo, useRef, useState } from "react";
import { SlotItemMapArray, Swapy, utils, createSwapy } from "swapy";
// import { useAutoAnimate } from "@formkit/auto-animate/react";

import TodoItem from "./TodoItem";
import { Todo } from "@/types/Todo";

type Props = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (updatedTodo: Todo) => void;
};
//
const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }: Props) => {
  const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
    utils.initSlotItemMap(todos, "id")
  );
  // const [parent, enableAnimations] = useAutoAnimate({ duration: 1000 });

  const slottedItems = useMemo(
    () => utils.toSlottedItems(todos, "id", slotItemMap),
    [todos, slotItemMap]
  );
  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      utils.dynamicSwapy(
        swapyRef.current,
        todos,
        "id",
        slotItemMap,
        setSlotItemMap
      ),
    [todos]
  );

  useEffect(() => {
    swapyRef.current = createSwapy(containerRef.current!, {
      manualSwap: true,
      animation: "spring",
      autoScrollOnDrag: true,
      // swapMode: "drop",
      // enabled: true,
      dragAxis: "y",
      // dragOnHold: true,
    });

    swapyRef.current.onSwap((event) => {
      setSlotItemMap(event.newSlotItemMap.asArray);
    });

    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <ul className="items flex flex-col gap-2">
        {slottedItems.map(({ slotId, itemId, item }) => (
          <li className="slot" key={slotId} data-swapy-slot={slotId}>
            {item && (
              <div className="item" data-swapy-item={itemId} key={itemId}>
                <TodoItem
                  todo={item}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <p className="text-xs pl-2 py-2 text-muted-foreground">
        drag to rearrange
      </p>
    </div>
  );
};

export default TodoList;
