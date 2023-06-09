import React from 'react';

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
      
        onAddTodo({
            title: todoTitle, 
            id: Date.now(),
        });
        console.log(todoTitle);

        // event.target.reset();
        setTodoTitle("");
    
    }


    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
