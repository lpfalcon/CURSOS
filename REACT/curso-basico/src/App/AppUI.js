import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } = React.useContext(TodoContext)
    return (
    <React.Fragment>
        <TodoCounter> </TodoCounter>
        <TodoSearch > </TodoSearch>
        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}

            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} />
            ))}
        </TodoList>
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        <CreateTodoButton />
    </React.Fragment>
    )
}

export { AppUI }