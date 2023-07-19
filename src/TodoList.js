import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({todoList, onRemoveTodo}) => {
  
    return (
        <ul>
            {todoList.map(function(item) {
              const {id} = item;
                return (
                    <TodoListItem key={id} item={item} onRemoveTodo={onRemoveTodo}/>
                );
              })
            }
        </ul>
    );

}

export default TodoList;