import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";
import { todoProps } from "@/types";

// Fetch data from the database
async function getData(): Promise<todoProps[]> {
  // Prisma call to fetch todos
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
      createdAt: true, // Include createdAt if needed for ordering
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  // Fetch data
  const data = await getData();

  return (
    <div className="todo w-screen py-20 flex justify-center flex-col items-center sm:h-full">
      <span className="text-4xl font-extrabold uppercase mb-10">Todo App</span>

      <div className="flex justify-center flex-col items-center">
        <AddTodo />

        {/* Show list of todos */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo) => (
            <div className="w-full" key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
