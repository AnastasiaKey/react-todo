import React from 'react';

const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        props.onAddTodo(todoTitle);
        console.log(todoTitle);

        event.target.reset();
    
    }


    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
