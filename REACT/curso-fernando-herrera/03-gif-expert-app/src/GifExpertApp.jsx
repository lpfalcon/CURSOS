import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

 const GifExpertApp = () => {
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

export default GifExpertApp