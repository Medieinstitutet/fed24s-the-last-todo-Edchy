import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  onSortTodos: (filter: string) => void;
  className?: string;
};

export function FilterTodos({ onSortTodos, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Select onValueChange={(value) => onSortTodos(value)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>sort by</SelectLabel>
            <SelectItem value="all">Show All</SelectItem>
            <SelectItem value="priority">High prio</SelectItem>
            <SelectItem value="isExpiringSoon">Ending in 24h</SelectItem>
            <SelectItem value="completed">Incomplete</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
