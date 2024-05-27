import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;
        setCategories([...categories, value]);

        // setCategories((cat) => [...cat, 'Holi'])

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            < AddCategory

                // setCategories={ setCategories } 
                onNewCategory={value => onAddCategory(value)}

            />

            {
                categories.map((category) => (
                    <GifGrid key={ category } 
                    category={ category }
                    />
                ))
            }
            
        </>

    )
}