import MultipleSelector, { Option } from "@/components/ui/MultipleSelector";

const OPTIONS: Option[] = [
  { label: "Errands", value: "errands" },
  { label: "Work", value: "work" },
  { label: "Groceries", value: "groceries" },
  { label: "Home", value: "home" },
  { label: "Fitness", value: "fitness" },
  { label: "Finance", value: "finance" },
  { label: "Study", value: "study" },
  { label: "Shopping", value: "shopping" },
  { label: "Calls", value: "calls" },
  { label: "Appointments", value: "appointments" },
  { label: "Miscellaneous", value: "misc" },
];

interface TagSelectorProps {
  value?: Option[];
  onChange?: (value: Option[]) => void;
}

const TagSelector = ({ value = [], onChange }: TagSelectorProps) => {
  return (
    <div className="">
      <MultipleSelector
        defaultOptions={OPTIONS}
        placeholder="Add some tags..."
        value={value}
        onChange={onChange}
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default TagSelector;
