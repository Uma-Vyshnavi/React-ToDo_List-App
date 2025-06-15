import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={toggleTodo}>✓</button>
      <button onClick={deleteTodo}>🗑</button>
    </li>
  );
}

export default TodoItem;
