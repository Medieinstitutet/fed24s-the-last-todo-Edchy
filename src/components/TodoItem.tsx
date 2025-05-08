import { Todo } from "../types/Todo";
import { ChevronsUpDown, Grip, X, Trash2, Trash } from "lucide-react";
import { formatDistanceToNow, formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import isPastTime from "@/utils/isPastTime";
//

type Props = {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
};

//
const TodoItem = ({ todo, onDeleteTodo }: Props) => {
  const {
    id,
    title,
    completed,
    createdAt,
    dueDate,
    priority,
    notes,
    tags,
    category,
    order,
  } = todo;

  return (
    <div className="">
      <Collapsible className="w-full">
        <Card className="bg-neutral-100 text-black px-4">
          <CollapsibleTrigger className="w-full h-full text-left py-2">
            <CardHeader className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-0 p-0">
              <div className="flex items-center gap-2">
                <ChevronsUpDown size={20} className="text-neutral-400" />

                <CardTitle
                  className={`${
                    isPastTime(dueDate) ? "text-red-400" : "text-black"
                  } flex-1`}
                >
                  {title}
                </CardTitle>
                {/* <div data-swapy-handle>
                  <Grip size={24} className="text-neutral-300" />
                </div> */}
              </div>

              <span className="badge bg-chart-2 text-neutral-100">
                {priority}
              </span>
              <div className="flex">
                <span className="badge bg-chart-1 text-neutral-100">
                  {category}
                </span>
              </div>
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <Button
              onClick={() => onDeleteTodo(id)}
              variant={"ghost"}
              className=" cursor-pointer"
            >
              <Trash2 />
            </Button>
            <CardContent className="flex flex-col gap-2">
              {tags &&
                tags.length > 0 &&
                tags.map((tag) => (
                  <span key={tag} className="badge bg-chart-4 ">
                    {tag}
                  </span>
                ))}
              {notes && <CardDescription>{notes}</CardDescription>}
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Created{" "}
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </p>

              {dueDate && (
                <p className="text-sm text-muted-foreground">
                  Due{" "}
                  {formatDistance(new Date(dueDate), new Date(), {
                    addSuffix: true,
                  })}
                </p>
              )}

              <p>{completed ? "completed" : "not completed"}</p>
              <p>order {order}</p>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
};

export default TodoItem;
