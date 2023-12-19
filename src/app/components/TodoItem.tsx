"use client";

interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

export default function TodoItem({
  title,
  id,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex items-center gap-1">
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        defaultChecked={complete}
        id={id}
        type="checkbox"
        className="peer cursor-pointer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
}
