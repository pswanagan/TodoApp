import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleComplete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSaveEdit = () => {
    onEdit(todo, text);
    setEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => onToggleComplete(todo)}
      />
      {editing ? (
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {!editing && (
        <>
          <button onClick={() => onDelete(todo)} disabled={!todo.complete}>
            Delete
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      {editing && <button onClick={handleSaveEdit}>Save</button>}
    </li>
  );
}

export default TodoItem;