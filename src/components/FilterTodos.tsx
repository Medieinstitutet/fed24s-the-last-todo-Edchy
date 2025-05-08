import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onSortTodos: (filter: string) => void;
};

export function FilterTodos({ onSortTodos }: Props) {
  return (
    <Select onValueChange={(value) => onSortTodos(value)}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>sort by</SelectLabel>
          <SelectItem value="all">Show All</SelectItem>
          <SelectItem value="priority">High prio</SelectItem>
          <SelectItem value="dueDate">Due date</SelectItem>
          <SelectItem value="completed">Incomplete</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
