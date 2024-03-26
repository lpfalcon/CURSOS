import React from "react";
import '.'
function TodoList(props) {
    const {children} = props
    return (
        <section className="TodoList">
            <ul>
                {children}
            </ul>
        </section>
    )
}

export  {TodoList}
