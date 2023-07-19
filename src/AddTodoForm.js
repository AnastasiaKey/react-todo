import React from 'react';
import InputWithLabel from './InputWithLabel';

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
            <InputWithLabel
            id="todoTitle"
            name="title"
            value={todoTitle}
            onChange={handleTitleChange}
            >
                Title
            </InputWithLabel>
        
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
