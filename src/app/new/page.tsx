import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

export default function New() {
  async function createTodo(data: FormData) {
    "use server";
    const title = data.get("title")?.valueOf();

    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid title!");
    }

    await prisma.todo.create({
      data: { title: title, complete: false },
    });

    redirect("/");
  }

  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-3">
        <input
          className="rounded border border-slate-300 bg-slate-800 p-2 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
          type="text"
          name="title"
        />
        <div className="flex justify-end gap-2">
          <Link
            className="rounded border border-slate-300 px-2 py-1 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
            href=".."
          >
            Cancel
          </Link>
          <button
            className="rounded border border-slate-300 px-2 py-1 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
