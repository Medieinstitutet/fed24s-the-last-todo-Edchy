import { Todo } from "../types/Todo";
import { ChevronsUpDown } from "lucide-react";
import { formatDistanceToNow, formatDistance } from "date-fns";

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
//

type Props = {
  todo: Todo;
};

//
const TodoItem = ({ todo }: Props) => {
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
    <li data-swapy-slot={id} className="my-1 ">
      <Collapsible data-swapy-item={id} className="w-full">
        <Card className="">
          <CollapsibleTrigger className="cursor-pointer w-full h-full text-left py-2">
            <CardHeader className="grid grid-cols-[1fr_auto_auto_auto] items-center p-6 gap-0">
              <div className="flex items-center gap-2">
                <ChevronsUpDown size={20} className="text-neutral-400" />

                <CardTitle className="flex-1">{title}</CardTitle>
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
              <p className="text-sm text-muted-foreground">
                Due{" "}
                {formatDistance(new Date(dueDate), new Date(), {
                  addSuffix: true,
                })}
              </p>{" "}
              <p>{completed ? "completed" : "not completed"}</p>
              <p>order {order}</p>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};

export default TodoItem;
