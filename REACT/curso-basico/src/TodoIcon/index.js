import React from "react";
import './TodoIcon.css'

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >

        </span>
    )
}

export { TodoIcon }