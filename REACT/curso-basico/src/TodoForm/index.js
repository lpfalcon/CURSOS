import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) => setNewTodoValue(event.target.value)

    const onCancel = () =>  setOpenModal(false)
    

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escriba aca ..." />

            <div>
                <button type="button" 
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }