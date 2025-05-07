export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  dueDate: string;
  priority: Priority;
  notes?: string;
  tags?: string[];
  category?: string;
  order: number;
};

type Priority = "low" | "medium" | "high";
