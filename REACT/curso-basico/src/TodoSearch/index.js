import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChange = (event) => { setSearchValue(event.target.value) }

    return (
        <input
            value={searchValue}
            className='TodoSearch'
            placeholder="Filtrar ..."
            onChange={onSearchValueChange}
        />
    )

}

export { TodoSearch }
