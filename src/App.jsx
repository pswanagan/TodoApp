import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css'


const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [action.payload, ...state.todos],
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case 'TOGGLE_COMPLETE':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    default:
      return state;
  }
}







function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, complete: false } });
  };

  const handleDeleteTodo = todo => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const handleToggleComplete = todo => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: todo });
  };

  const handleEditTodo = (todo, newText) => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: newText } });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={state.todos}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        onEdit={handleEditTodo}
      />
    </div>
  );
}

export default App
