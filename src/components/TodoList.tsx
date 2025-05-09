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

  useEffect(() => {
    if (!containerRef.current) return;
    const newMap = utils.initSlotItemMap(todos, "id");
    setSlotItemMap(newMap);

    if (!swapyRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        manualSwap: true,
        animation: "spring",
        autoScrollOnDrag: true,
        // swapMode: "drop",
        // enabled: true,
        // dragAxis: "y",
        // dragOnHold: true,
      });

      swapyRef.current.onSwap((event) => {
        setSlotItemMap(event.newSlotItemMap.asArray);
      });
    }

    if (swapyRef.current) {
      try {
        utils.dynamicSwapy(
          swapyRef.current,
          todos,
          "id",
          newMap,
          setSlotItemMap
        );
      } catch (error) {
        console.error("Error in dynamicSwapy:", error);
      }
    }

    return () => {
      if (swapyRef.current) {
        swapyRef.current.destroy();
        swapyRef.current = null;
      }
    };
  }, [todos]);

  if (!todos.length) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">All done! Just relax</p>
      </div>
    );
  }

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
        drag to rearrange (but dont do it after filtering plz, there is a nasty
        swapy bug 🐞 🫢)
      </p>
    </div>
  );
};

export default TodoList;
