import { Todo } from "../types/Todo";
import { ChevronDown } from "lucide-react";

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
    <li className="my-1">
      <Collapsible className="w-full">
        <Card className="bg-amber-200">
          <CollapsibleTrigger className="w-full text-left">
            <CardHeader className="flex flex-row items-center justify-between py-3">
              <CardTitle className="flex-1">{title}</CardTitle>
              <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent>
              {notes && <CardDescription>{notes}</CardDescription>}
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};

export default TodoItem;
