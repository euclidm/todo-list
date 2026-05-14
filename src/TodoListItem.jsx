// TodoListItem.jsx - Handles the an Item's Information for one of the Items in the TodoList

function TodoListItem({ todo, onCompleteTodo }){
  return (
    <> 
        <li>
            <input 
            type="checkbox" 
            checked={todo.isCompleted} 
            onChange={() => onCompleteTodo(todo.id)}
            />

            {todo.title}
        </li>
    </>
  );

}

export default TodoListItem;