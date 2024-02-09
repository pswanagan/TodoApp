import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;