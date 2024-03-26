import React from "react";
import './TodosLoading.css'
function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodod-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando ...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading }