interface CatgeroryProps {
    params: {
        categories: string[]
    },
    searchParams: {
    
    }

}

export default function Catgerory(props: CatgeroryProps) {
    console.log(props)
    const { categories } = props?.params || {}
    return (
        <h1>
            Dynamic Category {categories}
        </h1>
    )
}