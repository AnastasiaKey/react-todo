import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';



function App() {
 
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(
    () => {
      new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: {todoList: JSON.parse(localStorage.getItem('savedTodoList'))} }),
        2000
      )
  
      ).then((result) => {setTodoList(result.data.todoList); setIsLoading(false);})
    },
    []
  )


  React.useEffect(() => {
       if(!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
       }
    
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
    {isLoading?<p>...isloading</p>:<p></p>}
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}



export default App;
