// TodoList.jsx - Handles the list for the app

function TodoList() {
  const todoList = [
    {id: 1, title: "Review Resources"},
    {id: 2, title: "Take Notes"},
    {id: 3, title: "Code Out App"}
  ];

  return (
    <> 
        <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </>
  );
}

export default TodoList;