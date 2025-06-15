import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
