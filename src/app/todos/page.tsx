import { use } from "react";

//SSRで取得
async function getData() {
  const res = await fetch("http://localhost:3000/api/");
  return res.json();
}

type TodoType = {
  title: string;
};

export default function Page() {
  const todos: TodoType[] = use(getData());

  return (
    <>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo, i) => {
          return <div key={i}>{todo.title}</div>;
        })}
    </>
  );
}
