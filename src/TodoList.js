import React from 'react';
import TodoListItem from './TodoListItem';


const todoList = [
    {
      id:1,
      title: "Complete assigment"
    },
    {
      id:2,
      title: "Run assigment"
    },
    {
      id:3,
      title: "Check assigment"
    }
  ];
  
const TodoList = (props) => {
    return (
        <ul>
            {props.todoList.map(function(item) {
                return (
                    <TodoListItem key={item.id} item={item} />
                );
              })
            }
        </ul>
    );

}

export default TodoList;