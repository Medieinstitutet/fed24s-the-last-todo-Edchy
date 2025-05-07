import { useEffect, useMemo, useRef, useState } from "react";
import { SlotItemMapArray, Swapy, utils } from "swapy";
import { createSwapy } from "swapy";
import TodoItem from "./TodoItem";

import { Todo } from "@/types/Todo";

type Props = {
  todos: Todo[];
};
//
const TodoList = ({ todos }: Props) => {
  const [items, setItems] = useState<Todo[]>(todos);
  const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
    utils.initSlotItemMap(items, "id")
  );
  const slottedItems = useMemo(
    () => utils.toSlottedItems(items, "id", slotItemMap),
    [items, slotItemMap]
  );
  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      utils.dynamicSwapy(
        swapyRef.current,
        items,
        "id",
        slotItemMap,
        setSlotItemMap
      ),
    [items]
  );

  useEffect(() => {
    swapyRef.current = createSwapy(containerRef.current!, {
      manualSwap: true,
      // animation: 'dynamic'
      // autoScrollOnDrag: true,
      // swapMode: 'drop',
      // enabled: true,
      // dragAxis: 'x',
      // dragOnHold: true
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
      <div className="items">
        {slottedItems.map(({ slotId, itemId, item }) => (
          <div className="slot" key={slotId} data-swapy-slot={slotId}>
            {item && (
              <div className="item" data-swapy-item={itemId} key={itemId}>
                <TodoItem todo={item} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
