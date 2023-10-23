"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-2 items-center justify-between mb-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
          {title}
        </label>
      </div>

      <button
        className="border border-red-500 px-2 py-1 rounded-md text-red-500 hover:bg-red-500 hover:text-white"
        onClick={async (e) => {
          await deleteTodo(id);
          window.location.reload();
        }}>
        Delete
      </button>
    </li>
  );
}
