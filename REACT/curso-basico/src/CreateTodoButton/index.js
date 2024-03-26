import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext)
    const onClickButton = () => { setOpenModal(!openModal) }
    //  const onClickButton = () => setOpenModal(prevState=> !prevState) OJO SE PUEDE HACER DE ESTA FORMA

    return (
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }
