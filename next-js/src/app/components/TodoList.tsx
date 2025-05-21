"use client"
import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Todo List</h2>
      <form onSubmit={handleAdd} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ajouter une tâche"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Ajouter</button>
      </form>
      <ul style={{ marginTop: 20, padding: 0, listStyle: "none" }}>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
            <span>{todo}</span>
            <button onClick={() => handleDelete(idx)} style={{ background: "#ff4d4f", color: "white", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 