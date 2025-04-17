import { useEffect, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Todos = Todo[];

export const TodoLocalStorage = () => {
  const [todos, setTodos] = useState<Todos | []>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h2>📝 ToDo List</h2>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addTodo} style={{ marginLeft: "0.5rem" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: "0.5rem" }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "1rem", color: "red" }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
