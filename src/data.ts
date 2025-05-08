import { Todo } from "./types/Todo";

export const todos: Todo[] = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
    createdAt: "2025-05-06T08:00:00Z",
    dueDate: "2025-05-26T18:00:00Z",
    priority: "low",
    notes: "Remember oat milk, eggs, and bread",
    tags: [{ label: "Work", value: "work" }],
    category: "Personal",
  },
  {
    id: "2",
    title: "Finish portfolio website",
    completed: false,
    createdAt: "2025-05-05T14:30:00Z",
    dueDate: "2025-05-31T23:59:00Z",
    priority: "medium",
    notes: "Add contact form and optimize for mobile",
    tags: [{ label: "Work", value: "work" }],
    category: "Work",
  },
  {
    id: "3",
    title: "Call mom",
    completed: false,
    createdAt: "2025-05-07T09:15:00Z",
    dueDate: "2025-05-25T20:00:00Z",
    priority: "high",
    notes:
      "Tell her i love her, and ask about her health, and if she needs anything",
    tags: [{ label: "Family", value: "family" }],
    category: "Personal",
  },
  {
    id: "5",
    title: "Submit another todo",
    completed: false,
    createdAt: "2025-05-04T10:00:00Z",
    dueDate: "2025-05-07T17:00:00Z",
    priority: "high",
    notes:
      "Make sure to include all required fields, including tags and category, and ensure the form is validated correctly.",
    tags: [
      { label: "School", value: "school" },
      { label: "Assignment", value: "assignment" },
    ],
    category: "Work",
  },
];
