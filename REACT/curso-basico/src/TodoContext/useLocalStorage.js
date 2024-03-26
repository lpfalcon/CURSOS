import React from "react"
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItems] = React.useState(initialValue)
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItems = initialValue
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                } else {
                    parsedItems = JSON.parse(localStorageItem)
                }
                setItems(parsedItems)
                setLoading(false)
            } catch (error) {
                setError(error)
            }


        }, 3000);
    })

    const saveItem = (newItems) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItems))
            setItems(newItems)
        } catch (error) {
            setError(error)
        }
    }

    return { item, saveItem, loading, error }
}

export { useLocalStorage }