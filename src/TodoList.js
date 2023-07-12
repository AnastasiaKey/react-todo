import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({todoList}) => {
  
    return (
        <ul>
            {todoList.map(function(item) {
              const {id} = item;
                return (
                    <TodoListItem key={id} item={item} />
                );
              })
            }
        </ul>
    );

}

export default TodoList;