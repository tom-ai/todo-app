import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { complete: complete },
  });
}
export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="rounded border border-slate-300 px-2 py-1 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
        })}
      </ul>
    </>
  );
}
