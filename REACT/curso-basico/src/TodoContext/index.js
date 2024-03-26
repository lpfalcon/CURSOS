import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext()

function TodoProvider(props) {
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const { item: todos, saveItem, loading, error } = useLocalStorage('TODOS_V1', [])
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    const searchedTodos = searchValue.length > 0 ?
        todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) : [...todos]

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text)
        const newTodos = [...todos]
        if (todoIndex !== -1) {
            newTodos[todoIndex].completed = true
            saveItem(newTodos)
        }
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text)
        const newTodos = [...todos]
        if (todoIndex !== -1) {
            newTodos.splice(todoIndex, 1)
            saveItem(newTodos)
        }
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        })
        saveItem(newTodos)
    }
    
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }