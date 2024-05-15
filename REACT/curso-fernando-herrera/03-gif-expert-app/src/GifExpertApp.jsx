import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        console.log('holi');
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