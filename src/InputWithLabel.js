import React from 'react';

const InputWithLabel = ({id, name, value, onChange, children}) => {
    const inputRef = React.useRef();
    React.useEffect(() => {
            inputRef.current.focus();
        }
    )

    return (
        <>
        <label htmlFor={id}>{children}</label>
            <input 
            ref={inputRef}
            id={id}
            name={name}
            value={value} 
            onChange={onChange}>

            </input>
        </>
    );
}

export default InputWithLabel;