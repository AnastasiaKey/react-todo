
const InputWithLabel = ({id, name, value, onChange, children}) => {
    return (
        <>
        <label htmlFor={id}>{children}</label>
            <input 
            id={id}
            name={name}
            value={value} 
            onChange={onChange}>

            </input>
        </>
    );
}

export default InputWithLabel;