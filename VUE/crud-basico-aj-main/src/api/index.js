import axios from 'axios'

const headers = {
  'Content-Type': 'application/json'
}


const API_URL = 'https://2x1p15q853.execute-api.us-east-1.amazonaws.com/'

const compl = ['items']


export function listar () {
  return axios.get(`${API_URL}${compl[0]}`, {
    headers: headers
  })
}

export function listarId (id) {
  return axios.get(`${API_URL}${compl[0]}/${id}`, {
    headers: headers
  })
}

export function eliminar (id) {
  return axios.delete(`${API_URL}${compl[0]}/${id}`, {
    headers: headers
  })
}


export function crear (body) {
  return axios.put(`${API_URL}${compl[0]}`, body, {
    headers: headers
  })
}
