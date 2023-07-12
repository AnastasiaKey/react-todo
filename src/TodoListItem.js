import React from 'react';

const TodoListItem = ({item}) => {
    return (
        <li> 
            <span>{item.title}</span> 
        </li>
    );
}

export default TodoListItem;