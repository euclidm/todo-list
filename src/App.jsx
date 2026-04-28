// App.jsx
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todos = [
  {id: 1, title: "Review Resources"},
  {id: 2, title: "Take Notes"},
  {id: 3, title: "Code Out App"}
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm/>
      <TodoList todoList={todoList}/>
    </div>
  )
}

export default App
