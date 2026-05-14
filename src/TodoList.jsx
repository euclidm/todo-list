// TodoList.jsx - Handles the list for the app
import TodoListItem from './TodoListItem'
function TodoList({ todoList, onCompleteTodo }) {
  const todoListFiltered = todoList.filter(todo=>!todo.isCompleted);

  return (
    <> 
      {todoListFiltered.length === 0 ? 
        (<p>Add todo above to get started!</p>) // if true
        : (<ul>{todoListFiltered.map(todo => 
        <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo}/> )}</ul>) // if false
      }
    </>
  );
}

export default TodoList;