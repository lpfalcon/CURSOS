import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/'

function fetchData(urlApi) {
    return fetch(urlApi)
}

// fetchData(`${API}products`)
//     .then(response => response.json())
//     .then(products => console.log(products))
//     .catch(err => console.log(err))


fetchData(`${API}products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        return fetchData(`${API}categories/${product?.category?.id}`)
    })
    .then(response => response.json())
    .then(category => console.log(category.name))
    .catch(err => console.log(err))
    .finally(() => console.log("finnally"))