import { Todo } from "../types/Todo";

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
    <li>
      <div>{title}</div>
    </li>
  );
};

export default TodoItem;
