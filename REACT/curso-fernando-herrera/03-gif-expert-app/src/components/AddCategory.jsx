import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {

        setInputValue(target.value )

    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if( !newInputValue.length ) return
        
        onNewCategory( newInputValue )
        setInputValue('')

    }

    return (
        <form onSubmit={ onSubmit }>

            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChanged }
            />

        </form>
    )
}