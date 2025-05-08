export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  dueDate: string;
  priority: Priority;
  notes?: string;
  tags?: Tag[];
  category?: string;
};
interface Tag {
  label: string;
  value: string;
}
export type Priority = "low" | "medium" | "high";
