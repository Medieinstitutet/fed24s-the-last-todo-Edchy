import { Todo } from "../types/Todo";
import { ChevronsUpDown, Trash2, Check, X } from "lucide-react";
import { formatDistanceToNow, formatDistance } from "date-fns";
import Countdown from "./Countdown";
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
  onUpdateTodo: (updatedTodo: Todo) => void;
};

//
const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo }: Props) => {
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
  } = todo;

  return (
    <Collapsible className="w-full">
      <Card
        className={`${
          completed
            ? "bg-linear-65 from-neutral-900 to-indigo-500"
            : "bg-neutral-900"
        } text-white px-4 border-1`}
      >
        <CollapsibleTrigger className="w-full h-full text-left py-2">
          <CardHeader className="grid grid-cols-[1fr_auto] md:grid-cols-[400px_50px_auto] items-center gap-2 md:gap-0 p-0">
            <div className="flex items-center gap-2">
              <ChevronsUpDown
                size={20}
                className={`${
                  completed ? "text-neutral-200" : "text-neutral-400"
                }`}
              />

              <CardTitle
                className={`${
                  isPastTime(dueDate) && !completed
                    ? "text-red-400 "
                    : "text-white"
                } ${completed && "line-through"} flex-1 font-display`}
              >
                {title}
              </CardTitle>
              {/* <div data-swapy-handle>
                  <Grip size={24} className="text-neutral-300" />
                </div> */}
            </div>

            {/* lets do some nested ternaries :D */}
            <div
              className={`${
                priority === "high"
                  ? "bg-red-400"
                  : priority === "medium"
                  ? "bg-yellow-400"
                  : "bg-green-400"
              } h-4 w-4 rounded-full mr-4`}
            ></div>
            <div className="flex justify-end gap-2">
              <span className="badge mr-auto md:mr-0 bg-neutral-800 text-neutral-100 ">
                {category}
              </span>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="flex flex-col gap-2 px-0">
            <div className="flex gap-2">
              {tags &&
                tags.length > 0 &&
                tags.map(({ label }) => (
                  <span key={label} className="badge self-start bg-neutral-700">
                    {label}
                  </span>
                ))}
              <div className="flex gap-2 items-center ml-auto">
                <button
                  onClick={() =>
                    onUpdateTodo({ ...todo, completed: !completed })
                  }
                  className="cursor-pointer hover:opacity-60 text-white"
                >
                  {completed ? <X size={24} /> : <Check size={24} />}
                </button>
                <button
                  onClick={() => onDeleteTodo(id)}
                  className="cursor-pointer hover:opacity-60"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center-safe justify-between mb-8 mt-4">
              {notes && (
                <CardDescription className="text-white text-md font-hand text-xl">
                  {notes}
                </CardDescription>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-2 gap-2 px-0">
            <div className="flex gap-2">
              <p className="text-sm text-muted-foreground">
                Created{" "}
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </p>
              {dueDate && (
                <p
                  className={`${
                    isPastTime(dueDate) ? "text-red-400" : "text-emerald-400"
                  } text-sm`}
                >
                  Due{" "}
                  {formatDistance(new Date(dueDate), new Date(), {
                    addSuffix: true,
                  })}
                </p>
              )}
            </div>
            {/* <p className="text-muted-foreground">
              {completed ? "Completed 🎉" : "Not completed 😓"}
            </p> */}
            {!completed && <Countdown targetDate={new Date(dueDate || "")} />}
          </CardFooter>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default TodoItem;
