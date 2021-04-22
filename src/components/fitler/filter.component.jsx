import { useContext, useRef, useState } from "react";
import { UsersContext } from "../../providers/users.provider";

const Filter = () => {
    const { setFilter } = useContext(UsersContext)

    const [input, setInput] = useState('')
    const inputRef = useRef()

    const onInputChange = (e) => {
        const value = e.currentTarget.value
        setInput(value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        // const value = inputRef.current.value
        // debugger
        // const value = e.currentTarget.value
        setFilter(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input ref={inputRef} type="text" onChange={onInputChange} value={input} />
                <button type="submit" className="btn btn-info">search</button>
            </form>
        </div>
    );
};

export default Filter;