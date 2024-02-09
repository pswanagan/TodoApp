import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggleComplete, onEdit }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;