const { XMLHttpRequest } = require("xmlhttprequest")
const API = 'https://api.escuelajs.co/api/v1/'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error(`Error ${urlApi}`)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}


fetchData(`${API}products`, (error, response) => {
    if (error) console.error(error)
    fetchData(`${API}products/${response[0].id}`, (error2, response2) => {
        if (error2) console.error(error2)
        fetchData(`${API}categories/${response2?.category?.id}`, (error3, response3) => {
            if (error3) console.error(error3)
            console.log(response[0])
            console.log(response2.title)
            console.log(response3.name)
        })
    })
})