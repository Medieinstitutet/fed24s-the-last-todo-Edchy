// import { useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="h-screen  bg-red-300">
      <main className=" grid grid-cols-2 gap-4 p-4">
        <section className="bg-black">add todos</section>
        <TodoList />
      </main>
    </div>
  );
}
