import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';

const useSemiPersistentState = () => {
  
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
    );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]); 

  return [todoList, setTodoList];

};


function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

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
