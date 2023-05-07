import { NextResponse } from "next/server";

type TodoType = { title: string };

export async function GET() {
  const todos: TodoType[] = [
    { title: "task 1" },
    { title: "task 2" },
    { title: "task 3" },
  ];

  //loadingを出すために3秒待つ
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json(todos);
}
