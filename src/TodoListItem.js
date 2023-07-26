import React from 'react';

const TodoListItem = ({item, onRemoveTodo}) => {
    const handleRemoveTodo = () => {
        onRemoveTodo(item.id);
    };
    return (
        <li> 
            <span>{item.title}</span> 
            <button type="button" onClick={handleRemoveTodo}>Remove</button>
        </li>
    );
}

export default TodoListItem;