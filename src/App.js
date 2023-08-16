import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import TodoListItem from './TodoListItem';
// import { json } from 'express';



function App() {
 
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  const fetchData = async() => {
      const options = {
        method: "GET", 
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
        }
      };
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
      
      console.log(url);
      console.log("test",options);


        try {
          const response = await fetch(url, options);

          if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
          }
        const data = await response.json();

      console.log("DATA",data);

      const todos = data.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo
      });
        
      setTodoList(todos);
      setIsLoading(false);
     
      // console.log(data);
      return data;
        }
        catch {
          console.log("error messange");
      };
  
    };

    const postData = async(newTodo) => {

      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(
          {
            fields: {
              title: newTodo.title
            }
          }
        )
    
      }
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
      
      console.log(url);
      console.log(options);
    
    
      try {
        
        
        const response = await fetch(url, options);
    
          if (!response.ok) {
            const message = `Error: ${response.status}`;
                 throw new Error(message);
          }
          const data = await response.json();
              const newTodo = {
              id: data.id,
              title: data.fields.title
            }
          setTodoList([...todoList, newTodo]);     
          setIsLoading(false);
          
          console.log(data);
          return data;
    
      }
      catch{
        console.log("error message")
      };
    
    }
  
  React.useEffect(
    () => {
     fetchData();
    },
    []
  );


  React.useEffect(() => {
       
    if(!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
       }
    
      }, [todoList]); 

  const addTodo = (newTodo) => {
    postData(newTodo);
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
       {isLoading?<p>...isloading</p>: <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
    </>
  );
}



export default App;
