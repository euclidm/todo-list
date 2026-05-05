// TodoListItem.jsx - Handles the an Item's Information for one of the Items in the TodoList

function TodoListItem({ todo }){
  return (
    <> 
        <li>
            {todo.title}
        </li>
    </>
  );

}

export default TodoListItem;