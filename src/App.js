import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';



function App() {
 
 
  const [todoList, setTodoList] = React.useState([]); 
  
  const getAsyncTodoList = () =>
    new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: {todoList: todoList} }),
      2000
    )

    ).then((result) => {setTodoList(result.data.todoList)});
  

  React.useEffect(() => {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }, [todoList]); 

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }


const removeTodo = (id) => {
  const newremoveTodo = todoList.filter(
    (TodoListItem) => id!== TodoListItem.id
  );

  setTodoList(newremoveTodo);
}
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}



export default App;
