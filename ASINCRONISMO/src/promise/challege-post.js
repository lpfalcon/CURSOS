import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/'

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(data)
        }
    })

    return response
}