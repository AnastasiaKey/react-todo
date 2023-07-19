
const InputWithLabel = ({id, name, value, onChange, label}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label>
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